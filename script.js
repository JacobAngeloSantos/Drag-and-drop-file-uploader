const dropArea = document.getElementById('file-drop-area');
const fileInput = document.getElementById('file-input');

// Handle drag events
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault(); // Prevent default to allow dropping
  dropArea.classList.add('hover');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('hover');
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault(); // Prevent default drop behavior
  dropArea.classList.remove('hover');
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFiles(files);
  }
});

// Handle file input change event when a user selects files directly
fileInput.addEventListener('change', (e) => {
  const files = e.target.files;
  if (files.length > 0) {
    handleFiles(files);
  }
});

// Function to handle the uploaded files
function handleFiles(files) {
  console.log("Files received:", files);
  // Example: display file names
  Array.from(files).forEach((file) => {
    const fileName = document.createElement('p');
    fileName.textContent = file.name;
    dropArea.appendChild(fileName);
  });
}
