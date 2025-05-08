// src/components/Navbar.js
export default function Navbar() {
    return (
     
      <nav className="bg-black shadow fixed top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Ali</h1>
          <ul className="flex space-x-4 text-sm font-medium text-gray-700">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  