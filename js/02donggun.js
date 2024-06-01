document.addEventListener("DOMContentLoaded", () => {
    const skillSelect = document.getElementById("skill");
    const stackSelect = document.getElementById("stack");
    const profileForm = document.getElementById("profile-form");

    skillSelect.addEventListener("change", () => {
        handleSingleSelectChange(skillSelect, "skill-container");
    });

    stackSelect.addEventListener("change", () => {
        handleMultiSelectChange(stackSelect, "stack-container");
    });

    profileForm.addEventListener("submit", validateForm);

    function handleSingleSelectChange(selectElement, containerId) {
        const selectedValue = selectElement.value;
        const selectedText = selectElement.options[selectElement.selectedIndex].text;

        if (selectedValue === "" || selectedValue === "all") return; // "전체" 또는 빈 값은 처리하지 않음

        // 직군 선택 하나만
        const iconContainer = document.getElementById(containerId);
        if (iconContainer.children.length > 0) {
            alert("하나의 직군만 선택할 수 있습니다.");
            return;
        }

        // 선택된 옵션을 컨테이너에 추가
        const icon = document.createElement('div');
        icon.className = 'selected-item';
        icon.id = selectedValue;
        icon.textContent = selectedText;

        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'x';
        removeBtn.onclick = () => {
            iconContainer.removeChild(icon);

            // 옵션을 다시 select에 추가
            const newOption = document.createElement('option');
            newOption.value = selectedValue;
            newOption.text = selectedText;
            selectElement.add(newOption);

            // 셀렉트 박스 초기화
            selectElement.selectedIndex = 0; // 첫 번째 옵션(기본값)으로 초기화
        };

        icon.appendChild(removeBtn);
        iconContainer.appendChild(icon);

        // 기존 선택된 옵션 제거
        selectElement.remove(selectElement.selectedIndex);

        // 셀렉트 박스 초기화
        selectElement.selectedIndex = 0; // 첫 번째 옵션(기본값)으로 초기화
    }

    function handleMultiSelectChange(selectElement, containerId) {
        const selectedValue = selectElement.value;
        const selectedText = selectElement.options[selectElement.selectedIndex].text;
        const selectedIndex = selectElement.selectedIndex;

        if (selectedValue === "" || selectedValue === "all") return; // "전체" 또는 빈 값은 처리하지 않음

        // 기존 옵션 제거
        selectElement.remove(selectElement.selectedIndex);

        // 선택된 옵션을 컨테이너에 추가
        const iconContainer = document.getElementById(containerId);
        const icon = document.createElement('div');
        icon.className = 'selected-item';
        icon.id = selectedValue;
        icon.textContent = selectedText;

        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'x';
        removeBtn.onclick = () => {
            iconContainer.removeChild(icon);

            // 옵션을 다시 select에 추가
            const newOption = document.createElement('option');
            newOption.value = selectedValue;
            newOption.text = selectedText;

            // 원래 위치에 다시 추가
            if (selectedIndex >= selectElement.length) {
                selectElement.add(newOption);
            } else {
                selectElement.add(newOption, selectedIndex);
            }

            // 셀렉트 박스 초기화
            selectElement.selectedIndex = 0; // 첫 번째 옵션(기본값)으로 초기화
        };

        icon.appendChild(removeBtn);
        iconContainer.appendChild(icon);

        // 셀렉트 박스 초기화
        selectElement.selectedIndex = 0; // 첫 번째 옵션(기본값)으로 초기화
    }

    function validateForm(event) {
        const skillContainer = document.getElementById('skill-container');
        const stackContainer = document.getElementById('stack-container');
        const careerSelect = document.getElementById('experience-container');

        if (careerSelect.value === "") {
            alert("경력을 선택해주세요.");
            event.preventDefault();
        }
        else if (skillContainer.children.length === 0) {
            alert('적어도 하나의 직군이 선택되어야 합니다.');
            event.preventDefault();
        }
        else if (stackContainer.children.length === 0) {
            alert('적어도 하나의 기술 스택을 선택해야 합니다.');
            event.preventDefault();
        }
        else {
            alert("수정이 완료되었습니다.");
        }
    }
});
