export function createForm(formString) {
  const wrapper = document.createElement("div");
  wrapper.className = "form";

  const label = document.createElement("span");
  label.textContent = "Form:";
  wrapper.appendChild(label);

  const itemsContainer = document.createElement("div");
  itemsContainer.className = "form__items";

  formString
    .split("")
    .reverse()
    .forEach((f) => {
      const item = document.createElement("span");
      item.className = `form__item ${f.toLowerCase()}`;
      item.textContent = f;
      itemsContainer.appendChild(item);
    });

  wrapper.appendChild(itemsContainer);

  return wrapper;
}
