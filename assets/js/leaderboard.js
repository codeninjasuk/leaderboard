// Sourced from ryanparag on CodePen

console.clear();

const tableRow = document.querySelectorAll(".list__row");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const closeOverlayBtn = document.querySelector(".button--close");

const sidebarClose = () => {
  sidebar.classList.remove("is-open");
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.classList.remove("is-open");
    overlay.style.opacity = 1;
  }, 300);
};

function formatTable(){
  const tableRow = document.querySelectorAll(".list__row");  
tableRow.forEach(tableRow => {
  tableRow.addEventListener("click", function () {
    overlay.style.opacity = 0;
    overlay.classList.add("is-open");
    sidebar.classList.add("is-open");
    setTimeout(() => {
      overlay.style.opacity = 1;
    }, 100);

    // Sidebar content
    const sidebarBody = document.querySelector(".sidebar__body");
    sidebarBody.innerHTML = '';

    const ninjaName = this.querySelector(".list__cell:nth-of-type(2) .list__value").innerHTML;
    const ninjaBelt = this.querySelector(".list__cell:nth-of-type(4) .list__value").innerHTML;
    const ninjaLevel = this.querySelector(".list__cell:nth-of-type(5) .list__value").innerHTML;
    const ninjaPicture = this.dataset.image;
    const ninjaActivity = this.dataset.activity;
    const ninjaActivityImg = this.dataset.country;

    const newNinja = document.createElement('div');
    newNinja.classList = 'driver';

    const ninjaContent = document.createElement('div');
    ninjaContent.classList = 'driver__content';

    const profile = document.createElement('div');
    profile.classList = 'driver__image';
    profile.style.backgroundImage = `url('/assets/img/belts/${ninjaBelt}.png')`;
    newNinja.appendChild(profile);

    const ninjaTitle = document.createElement('div');
    ninjaTitle.classList = 'driver__title';
    ninjaTitle.innerHTML = ninjaName;
    ninjaContent.appendChild(ninjaTitle);

    activityNames = {
      'Build 1':'build',
      'Build 2':'build',
      'Quest':'project',
      'Explore':'explore',
      'Adventure':'solve'
    }

    const ninjaInfo = document.createElement('div');
    ninjaInfo.innerHTML = `
		<table class="driver__table">
			<tbody>
				<tr>
					<td><small>Belt</small></td>
					<td class="caps">${ninjaBelt}</td>
				</tr>
                <tr>
					<td><small>Level</small></td>
					<td class="caps">${ninjaLevel}</td>
				</tr>
                <tr>
					<td><small>Activity</small></td>
					<td><img class="activity-badge" src="/assets/img/activity/${activityNames[ninjaActivity]}.png"><span>${ninjaActivity}</span></td>
				</tr>
				<tr>
					<td><small>Score</small></td>
					<td class="caps">${this.dataset.score} </td>
				</tr>
        <tr>
					<td><small>Latest Update</small></td>
					<td>${this.dataset.remark} </td>
				</tr>
				
			</tbody>
		</table>`;
    ninjaContent.appendChild(ninjaInfo);

    newNinja.appendChild(ninjaContent);
    sidebarBody.appendChild(newNinja);

  });
});
}

closeOverlayBtn.addEventListener("click", function () {
  sidebarClose();
});

overlay.addEventListener("click", function () {
  sidebarClose();
});