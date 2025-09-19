<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marc Kiann Villaganes - Senior Developer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #2c3e50, #4a6741);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .profile-name {
            font-size: 3em;
            margin: 0;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1;
        }
        
        .title {
            font-size: 1.5em;
            margin: 10px 0 0 0;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 40px;
        }
        
        .section {
            margin-bottom: 30px;
        }
        
        .section h2 {
            color: #2c3e50;
            font-size: 1.8em;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 3px solid #3498db;
            display: inline-block;
        }
        
        .greeting {
            font-size: 1.2em;
            color: #34495e;
            margin-bottom: 20px;
            text-align: center;
            font-style: italic;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .skill-tag {
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            padding: 10px 15px;
            border-radius: 25px;
            text-align: center;
            font-weight: 600;
            transform: translateY(0);
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
        }
        
        .skill-tag:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 16px rgba(52, 152, 219, 0.4);
        }
        
        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            border-left: 5px solid #3498db;
            transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
        }
        
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        
        .stat-label {
            color: #7f8c8d;
            font-weight: 600;
        }
        
        .contact-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .contact-link {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);
        }
        
        .contact-link:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 16px rgba(231, 76, 60, 0.4);
            text-decoration: none;
            color: white;
        }
        
        .about-text {
            font-size: 1.1em;
            color: #2c3e50;
            text-align: center;
            margin: 20px 0;
            line-height: 1.8;
        }
        
        .highlight {
            background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
            padding: 2px 8px;
            border-radius: 5px;
            font-weight: 600;
        }
        
        @media (max-width: 600px) {
            .profile-name {
                font-size: 2.2em;
            }
            
            .content {
                padding: 20px;
            }
            
            .contact-links {
                flex-direction: column;
                align-items: center;
            }
            
            .skills-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="profile-name">Marc Kiann Villaganes</h1>
            <p class="title">Senior Developer</p>
        </div>
        
        <div class="content">
            <div class="section">
                <p class="greeting">👋 Welcome to my GitHub profile!</p>
                <p class="about-text">
                    I'm a <span class="highlight">passionate senior developer</span> with extensive experience in building 
                    scalable applications and leading development teams. I love turning complex problems into 
                    elegant solutions and continuously learning new technologies.
                </p>
            </div>
            
            <div class="section">
                <h2>🚀 Technical Skills</h2>
                <div class="skills-grid">
                    <div class="skill-tag">JavaScript</div>
                    <div class="skill-tag">TypeScript</div>
                    <div class="skill-tag">React</div>
                    <div class="skill-tag">Node.js</div>
                    <div class="skill-tag">Python</div>
                    <div class="skill-tag">AWS</div>
                    <div class="skill-tag">Docker</div>
                    <div class="skill-tag">MongoDB</div>
                    <div class="skill-tag">PostgreSQL</div>
                    <div class="skill-tag">Git</div>
                    <div class="skill-tag">CI/CD</div>
                    <div class="skill-tag">Microservices</div>
                </div>
            </div>
            
            <div class="section">
                <h2>📊 GitHub Stats</h2>
                <div class="stats-container">
                    <div class="stat-card">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Projects Completed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">Technologies Mastered</div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>💼 What I Do</h2>
                <p class="about-text">
                    • <strong>Full-Stack Development:</strong> Building end-to-end applications with modern frameworks<br>
                    • <strong>Team Leadership:</strong> Mentoring junior developers and leading technical initiatives<br>
                    • <strong>Architecture Design:</strong> Creating scalable and maintainable system architectures<br>
                    • <strong>Code Review:</strong> Ensuring code quality and best practices across projects<br>
                    • <strong>Performance Optimization:</strong> Improving application speed and efficiency
                </p>
            </div>
            
            <div class="section">
                <h2>🌟 Current Focus</h2>
                <p class="about-text">
                    Currently exploring <span class="highlight">cloud-native technologies</span>, 
                    <span class="highlight">AI/ML integration</span>, and contributing to open-source projects. 
                    Always excited to collaborate on innovative solutions!
                </p>
            </div>
            
            <div class="section">
                <h2>📫 Let's Connect</h2>
                <div class="contact-links">
                    <a href="mailto:marc.villaganes@example.com" class="contact-link">📧 Email</a>
                    <a href="https://linkedin.com/in/marc-villaganes" class="contact-link">💼 LinkedIn</a>
                    <a href="https://twitter.com/marc_villaganes" class="contact-link">🐦 Twitter</a>
                    <a href="https://marc-portfolio.dev" class="contact-link">🌐 Portfolio</a>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            const skillTags = document.querySelectorAll('.skill-tag');
            const statCards = document.querySelectorAll('.stat-card');
            
            // Animate skill tags on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = `fadeInUp 0.6s ease forwards ${Math.random() * 0.5}s`;
                    }
                });
            });
            
            skillTags.forEach(tag => observer.observe(tag));
            statCards.forEach(card => observer.observe(card));
            
            // Add CSS for fadeInUp animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .skill-tag, .stat-card {
                    opacity: 0;
                }
            `;
            document.head.appendChild(style);
        });
    </script>
</body>
</html>
