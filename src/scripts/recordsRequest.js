document.addEventListener('DOMContentLoaded', () => {
  const recordsList = document.getElementById('records-list');

  function fetchRecords() {
    const jwtToken = localStorage.getItem('jwtToken');
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const url = 'http://wd.etsisi.upm.es:10000/records';

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch records');
        }
        return response.json();
      })
      .then((data) => {
        displayRecords(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        recordsList.innerHTML = '<li>Failed to load records</li>';
      });
  }

  function displayRecords(records) {
    recordsList.innerHTML = '';
    records.forEach((record, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${record.username}: ${record.punctuation} points, Trees used: ${record.ufos}, Time: ${record.disposedTime}s`;

      listItem.style.animationDelay = `${index * 0.1}s`;

      recordsList.appendChild(listItem);
    });
  }

  fetchRecords();
});
