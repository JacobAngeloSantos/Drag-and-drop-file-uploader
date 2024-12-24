const dropArea = document.getElementById('file-drop-area');
const fileInput = document.getElementById('file-input');

// Handle drag events
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('hover');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('hover');
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('hover');
  
  const files = e.dataTransfer.files;
  handleFiles(files);
});

// Handle file input change
fileInput.addEventListener('change', (e) => {
  const files = e.target.files;
  handleFiles(files);
});

// Function to handle the uploaded files
function handleFiles(files) {
  console.log(files);
  // You can process the files here, such as uploading them to a server
}
