import styles from './Intro/IntroSection.module.css';

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Redux', 'Node.js',"Sprng Boot", 
  'MUI', 'Ant Design', 'Tailwind CSS',
  'RESTful API',
  'MongoDB', 'MySQL',
  'VSCode', 'Git', 'GitLab', 'Postman', 'Trello',"Docker","InteLliJ",
  
];

const IntroSection = () => (  
  <section className={styles.intro_section_2col} style={{alignItems: 'center'}}>
    <div className={styles.intro_left}>
      <p className={styles.intro_hello}>Hello, I'm</p>
      <h1 className={styles.intro_title}>Son Pham Van <span className={styles.intro_username}></span></h1>
      <p className={styles.intro_role}>BackEnd Developer </p>
      <p className={styles.intro_desc}>I am a web application developer</p>
      <button className={styles.intro_contact_btn}>Contact</button>
      <div className={styles.about_me_block}>
        <h2>About me</h2>
        <p>I'm Son, a passionate computer technician with over 1 year of experience overall, specializing in both Front-End and Back-End development.<br/><br/>
        Skilled in JavaScript, TypeScripn, and experienced with frameworks like ReactJS, Redux Toolkit, Node.ssk.<br/><br/>
        Proficient in UI libraries and tools: MUI, Ant DesiCN, Tailwind Cs.<br/><br/>
        Backend tools & concepts:  WebSocket, RESTful API.<br/><br/>
        Databases: MySQL.<br/><br/>
        Tools: VSCode, Git, GitLab, Postman, Docker, Trello.<br/><br/>
        Familiar with Linux (Ubuntu) environments.<br/><br/>
        Soft skills: Teamwork, Communication, Creativity, Responsibility, and Eagerness to learn.</p>
      </div>
      <div className={styles.skills_block}>
        <span>Here are my main skills:</span>
        <div className={styles.skills_list}>
          {skills.map(skill => (
            <span className={styles.skill_item} key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.intro_right}>
      <img src="/logo/face2.jpg" alt="avatar" className={styles.intro_big_avatar} />
    </div>
  </section>
);

export default IntroSection;
