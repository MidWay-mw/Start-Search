function performSearch() {
    var searchInput = document.getElementById('searchInput').value;
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
    window.location.href = searchUrl;
    return false;
}
function openNotification() {
            document.getElementById('overlay').classList.add('active');
            document.getElementById('notification').classList.add('active');
        }

        function closeNotification() {
            document.getElementById('overlay').classList.remove('active');
            document.getElementById('notification').classList.remove('active');
        }
