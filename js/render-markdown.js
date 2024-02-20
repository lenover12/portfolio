document.addEventListener('DOMContentLoaded', function() {
  var markdownTextTools = 
  '**IDE:**  \n- Visual Studio Code · Visual Studio · Eclipse · Atom · PyCharm\n\n**Containerization:**  \n- Docker  \n\n**API Testing:**  \n- Postman  \n\n**Database Client:**  \n- SQLiteStudio · PGAdmin4 · AzureDataStudio  \n\n**Operating System:**  \n- Windows · MacBook · Linux  \n\n**Project Management:**  \n- Trello · Jira  \n\n**Version control:**  \n- Git & GitHub'
  var markdownTextTech = '**Programming Languages**\n- Python · Java · C++ · C#  \n- HTML5 · CSS3 · JavaScript (ES6+) · PHP  \n- Minecraft McFunction language  \n\n**Database Architecture**  \n- MySQL · PostgreSQL · DynamoDB  \n\n**Web Frameworks & Libraries**  \n- React  \n- Django · Flask  \n- ASP.NET  \n\n**Cloud Computing**  \n- Amazon Web Services (AWS) · Google Cloud Platform (GCP) · Microsoft Azure · Digital Ocean (IaaS)  \n*AWS:*  \n&nbsp;&nbsp;- API Gateway · DynamoDB · EC2 · Elastic Beanstalk · Lambda · Polly · S3  \n\n**Architectures**  \n- MVC  \n\n**Methodologies**  \n- Agile · Scrum · Waterfall'
  var markdownTextSkills = '**Concepts & Practices**  \n- Test-Driven Development (TDD)\n- Behavior-Driven Development (BDD)\n- Continuous Integration (CI)\n- Continuous Deployment (CD)\n- Clean Code principles\n- SOLID principles\n\n**Technical Visualization**\n- Entity-Relationship diagrams · Flowcharts · Class diagrams · Sequence diagrams · Activity diagrams\n- Database schema diagrams\n- Wireframes\n- Game Design Documents\n\n**Additional Skills**\n- Elementary Japanese (speaking and reading)\n- User-Centered Design principles\n\n**Notable Work Skills**\n\n- Department Management Relief (Woolworths 2015)\n- Customer Satisfaction (ERC Customer feedback @ Woolworths Metro 2023)'
  var markdownContentToolsDiv = document.getElementById('markdown-content-tools');
  markdownContentToolsDiv.innerHTML = marked.parse(markdownTextTools);
  var markdownContentTechDiv = document.getElementById('markdown-content-tech');
  markdownContentTechDiv.innerHTML = marked.parse(markdownTextTech);
  var markdownContentSkillsDiv = document.getElementById('markdown-content-skills');
  markdownContentSkillsDiv.innerHTML = marked.parse(markdownTextSkills);
});