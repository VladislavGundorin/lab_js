function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      var searchText = document.getElementById('searchField').value.toLowerCase().trim();
      var rows = document.querySelectorAll('.container tbody tr');

      rows.forEach(row => {
         var cells = row.querySelectorAll('td');
         var found = false;

         cells.forEach(cell => {
            var cellText = cell.textContent.toLowerCase();
            if (cellText.includes(searchText)) {
               found = true;
            }
         });
         if (found) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
   }
}
