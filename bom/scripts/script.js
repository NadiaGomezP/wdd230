const input = document.querySelector("#favchap");
const btn = document.querySelector("button");
const list = document.querySelector(".list");

btn.addEventListener("click", () => {
	let inputChapter = input.value.length;
	let i = input.value;
	if (inputChapter == 0) {
    console.log('Ingrese rut');
  } else {
				let item = document.createElement("li");
				list.appendChild(item);
				item.innerHTML = i;
				let btnX = document.createElement("button");
				list.appendChild(btnX)
				btnX.setAttribute("id", "xButton");
				btnX.textContent = "❌";
				btnX.addEventListener("click", () => {
					list.removeChild(item);
					btnX.remove();
				})
		}
	input.focus();
	input.value = "";
})