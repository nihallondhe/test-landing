<!DOCTYPE >
< lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Scroll & Dark Mode</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
         {
            scroll-behavior: smooth;
        }
        .dark {
            background-color: #1a202c;
            color: #e2e8f0;
        }
        .dark .bg-gray-100 {
            background-color: #2d3748;
        }
        .dark .text-gray-800 {
            color: #e2e8f0;
        }
        .dark .border-gray-300 {
            border-color: #4a5568;
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-800 transition-colors duration-300">
    <nav class="fixed w-full bg-white dark:bg-gray-800 shadow-md p-4 z-10">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#" class="text-xl font-bold">Logo</a>
            <div class="space-x-4">
                <a href="#home" class="hover:text-blue-500">Home</a>
                <a href="#about" class="hover:text-blue-500">About</a>
                <a href="#services" class="hover:text-blue-500">Services</a>
                <a href="#contact" class="hover:text-blue-500">Contact</a>
                <button id="darkModeToggle" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                    Dark Mode
                </button>
            </div>
        </div>
    </nav>

    <main class="pt-20">
        <section id="home" class="min-h-screen flex items-center justify-center p-8">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4">Welcome Home</h1>
                <p class="text-lg mb-8">Smooth scrolling and dark mode example.</p>
                <a href="#about" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Learn More
                </a>
            </div>
        </section>

        <section id="about" class="min-h-screen p-8 border-t border-gray-300">
            <h2 class="text-3xl font-bold mb-6">About Us</h2>
            <p class="mb-4">This section demonstrates smooth scrolling.</p>
            <p>Click the navigation links to see it in action.</p>
        </section>

        <section id="services" class="min-h-screen p-8 border-t border-gray-300">
            <h2 class="text-3xl font-bold mb-6">Our Services</h2>
            <p>Scroll up and down to experience smooth transitions.</p>
        </section>

        <section id="contact" class="min-h-screen p-8 border-t border-gray-300">
            <h2 class="text-3xl font-bold mb-6">Contact</h2>
            <p>Toggle dark mode using the button in the navigation.</p>
        </section>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const toggleButton = document.getElementById('darkModeToggle');
            const Element = document.documentElement;
            
            toggleButton.addEventListener('click', function() {
                Element.classList.toggle('dark');
                toggleButton.textContent = Element.classList.contains('dark') 
                    ? 'Light Mode' 
                    : 'Dark Mode';
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
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
</>