html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Scroll & Dark Mode</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        html {
            scroll-behavior: smooth;
        }
        .dark {
            color-scheme: dark;
        }
        .dark body {
            background-color: #1a202c;
            color: #e2e8f0;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 transition-colors duration-300">
    <nav class="sticky top-0 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white">Logo</a>
            <div class="space-x-6">
                <a href="#home" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
                <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
                <a href="#services" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
                <a href="#contact" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
                <button id="themeToggle" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    🌙 Dark
                </button>
            </div>
        </div>
    </nav>

    <main class="container mx-auto px-6 py-12">
        <section id="home" class="min-h-screen flex items-center">
            <div class="max-w-3xl">
                <h1 class="text-5xl font-bold mb-6">Welcome Home</h1>
                <p class="text-xl mb-8">This page features smooth scrolling and dark mode toggle.</p>
                <a href="#about" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Learn More ↓</a>
            </div>
        </section>

        <section id="about" class="min-h-screen flex items-center">
            <div class="max-w-3xl">
                <h2 class="text-4xl font-bold mb-6">About Us</h2>
                <p class="text-lg mb-4">Scroll smoothly to this section. Try the dark mode toggle!</p>
                <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>

        <section id="services" class="min-h-screen flex items-center">
            <div class="max-w-3xl">
                <h2 class="text-4xl font-bold mb-6">Our Services</h2>
                <p class="text-lg">We provide excellent services with smooth user experience.</p>
            </div>
        </section>

        <section id="contact" class="min-h-screen flex items-center">
            <div class="max-w-3xl">
                <h2 class="text-4xl font-bold mb-6">Contact Us</h2>
                <p class="text-lg">Get in touch for more information.</p>
            </div>
        </section>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('themeToggle');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            
            const setTheme = (isDark) => {
                document.documentElement.classList.toggle('dark', isDark);
                themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            };
            
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                setTheme(storedTheme === 'dark');
            } else {
                setTheme(prefersDark.matches);
            }
            
            themeToggle.addEventListener('click', () => {
                const isDark = !document.documentElement.classList.contains('dark');
                setTheme(isDark);
            });
            
            prefersDark.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    setTheme(e.matches);
                }
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>