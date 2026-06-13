const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { pool } = require('./db');

async function migrate() {
  try {
    console.log('Running database migration...');

    // Courses table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(100),
        duration VARCHAR(100),
        level VARCHAR(50),
        instructor VARCHAR(255),
        image_url TEXT,
        price DECIMAL(10,2) DEFAULT 0,
        is_published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log(' - courses table ready');

    // Lessons table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS lessons (
        id SERIAL PRIMARY KEY,
        course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        video_url TEXT,
        duration VARCHAR(50),
        order_index INTEGER DEFAULT 0,
        content_type VARCHAR(50) DEFAULT 'video',
        is_free BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log(' - lessons table ready');

    // Announcements table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS announcements (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        type VARCHAR(50) DEFAULT 'general',
        is_published BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log(' - announcements table ready');

    // Exam questions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS exam_questions (
        id SERIAL PRIMARY KEY,
        module_id VARCHAR(100),
        question TEXT NOT NULL,
        options JSONB NOT NULL,
        correct_answer VARCHAR(255) NOT NULL,
        explanation TEXT,
        exam_type VARCHAR(50) DEFAULT 'daily',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log(' - exam_questions table ready');

    // Exam results table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS exam_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        module_id VARCHAR(100),
        exam_type VARCHAR(50),
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        answers JSONB,
        passed BOOLEAN DEFAULT false,
        completed_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log(' - exam_results table ready');

    // Student enrollments (links users to courses)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS student_courses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        progress INTEGER DEFAULT 0,
        status VARCHAR(50) DEFAULT 'enrolled',
        enrolled_at TIMESTAMP DEFAULT NOW(),
        completed_at TIMESTAMP,
        UNIQUE(user_id, course_id)
      )
    `);
    console.log(' - student_courses table ready');

    // Certificates table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        certificate_id VARCHAR(100) UNIQUE NOT NULL,
        issued_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log(' - certificates table ready');

    // Resource library table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS resources (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        url TEXT NOT NULL,
        type VARCHAR(50) DEFAULT 'pdf',
        category VARCHAR(100),
        is_published BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log(' - resources table ready');

    // Add phone column to users if missing
    try {
      await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(50)`);
      console.log(' - users.phone column ensured');
    } catch(e) {}

    // Seed demo courses
    const courseCount = await pool.query('SELECT COUNT(*) FROM courses');
    if (parseInt(courseCount.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO courses (title, description, category, duration, level, instructor, price, is_published) VALUES
        ('Business Analysis Foundations', 'Master the fundamentals of Business Analysis with practical case studies and real-world scenarios.', 'Business Analysis', '6 Weeks', 'Beginner', 'Dr. Franklin Kalu', 79.00, true),
        ('BCS Foundation Certificate in Business Analysis', 'Prepare for the BCS Foundation exam with structured micro-learning and visual explanations.', 'BCS Certification', '6 Weeks', 'Beginner', 'Dr. Franklin Kalu', 79.00, true),
        ('BCS Business Analysis Practice', 'Learn how to identify and evaluate options for improving business processes.', 'BCS Certification', '6 Weeks', 'Intermediate', 'Dr. Franklin Kalu', 149.00, true),
        ('Requirements Engineering', 'Master requirements elicitation, analysis, validation and management techniques.', 'BCS Certification', '6 Weeks', 'Intermediate', 'Dr. Franklin Kalu', 149.00, true),
        ('Modelling Business Processes', 'Learn to model, analyze and improve business processes using industry-standard techniques.', 'BCS Certification', '4 Weeks', 'Advanced', 'Dr. Franklin Kalu', 149.00, true)
      `);
      console.log(' - demo courses seeded');
    }

    // Create test student user (password: 123456)
    const studentCount = await pool.query("SELECT COUNT(*) FROM users WHERE email = 'student@test.com'")
    if (parseInt(studentCount.rows[0].count) === 0) {
      const bcrypt = require('bcryptjs')
      const hashed = await bcrypt.hash('123456', 10)
      await pool.query(
        "INSERT INTO users (email, password, full_name, role) VALUES ($1, $2, $3, 'student')",
        ['student@test.com', hashed, 'Test Student']
      )
      console.log(' - test student created (student@test.com / 123456)')
    }

    // Seed demo exam questions
    const examCount = await pool.query('SELECT COUNT(*) FROM exam_questions')
    if (parseInt(examCount.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO exam_questions (question, options, correct_answer, explanation, exam_type) VALUES
        (
          'What is the primary role of a Business Analyst?',
          '["Write code","Bridge gap between stakeholders and technical teams","Manage finances","Design marketing campaigns"]',
          'Bridge gap between stakeholders and technical teams',
          'The BA acts as a liaison between business stakeholders and the technical delivery team.',
          'daily'
        ),
        (
          'Which of the following is a Business Analysis technique?',
          '["Agile Sprints","MOSCOW Prioritization","Docker Containers","React Components"]',
          'MOSCOW Prioritization',
          'MOSCOW (Must have, Should have, Could have, Won''t have) is a key prioritization technique in BA.',
          'daily'
        ),
        (
          'What does SWOT stand for?',
          '["Strengths, Weaknesses, Opportunities, Threats","System, Workflow, Output, Task","Strategy, Work, Objective, Target","Structure, Workflow, Outcome, Test"]',
          'Strengths, Weaknesses, Opportunities, Threats',
          'SWOT Analysis is a strategic planning tool used to evaluate these four elements.',
          'daily'
        ),
        (
          'What is a stakeholder?',
          '["A software tool","A person with interest in the project","A type of document","A testing methodology"]',
          'A person with interest in the project',
          'Stakeholders are individuals or groups who have an interest in the outcome of a project.',
          'daily'
        ),
        (
          'What is the BABOK?',
          '["A programming language","A business analysis framework","A database system","A project management tool"]',
          'A business analysis framework',
          'The BABOK (Business Analysis Body of Knowledge) is the standard framework for BA practice.',
          'daily'
        ),
        (
          'Which requirements type describes what the system must do?',
          '["Functional requirements","Non-functional requirements","Technical requirements","Business requirements"]',
          'Functional requirements',
          'Functional requirements define specific behaviors and functions of the system.',
          'daily'
        ),
        (
          'What is a user story?',
          '["A story about users","A short description of a feature from end-user perspective","A technical specification","A testing script"]',
          'A short description of a feature from end-user perspective',
          'User stories follow the format: "As a [user], I want [goal] so that [reason]".',
          'daily'
        ),
        (
          'What does KPI stand for?',
          '["Key Performance Indicator","Key Process Input","Knowledge Platform Integration","Key Product Interface"]',
          'Key Performance Indicator',
          'KPIs are measurable values that track progress toward business objectives.',
          'daily'
        ),
        (
          'What is process modelling?',
          '["Creating software architecture","Visually representing business processes","Writing test cases","Designing databases"]',
          'Visually representing business processes',
          'Process modelling uses diagrams (like BPMN or flowcharts) to represent business workflows.',
          'daily'
        ),
        (
          'Which of the following is NOT a BA deliverable?',
          '["Requirements document","Source code","Process model","Stakeholder map"]',
          'Source code',
          'Source code is a development deliverable, not a BA deliverable.',
          'daily'
        )
      `);
      console.log(' - demo exam questions seeded');
    }

    // Seed demo announcements
    const annCount = await pool.query('SELECT COUNT(*) FROM announcements');
    if (parseInt(annCount.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO announcements (title, content, type) VALUES
        ('Welcome to Zeelin Academy!', 'We are excited to have you on board. Start your BA journey today!', 'welcome'),
        ('New BCS Syllabus Available', 'The updated BCS syllabus is now available in your course materials.', 'update'),
        ('Mock Quiz Schedule', 'Weekly mock quizzes are now available every Friday. Check your course calendar.', 'exam')
      `);
      console.log(' - demo announcements seeded');
    }

    console.log('Migration complete!');
    await pool.end();
    process.exit(0);
  } catch (e) {
    console.error('Migration error:', e.message);
    process.exit(1);
  }
}
migrate();
