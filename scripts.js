document.addEventListener('DOMContentLoaded', function () {
    const fontRadios = document.querySelectorAll('input[name="font"]');
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    const body = document.body;

    // 폰트 및 테마 설정 로드
    const savedFont = localStorage.getItem('selectedFont');
    const savedTheme = localStorage.getItem('selectedTheme');

    if (savedFont) {
        document.getElementById(savedFont).checked = true;
        body.classList.add(savedFont);
    } else {
        body.classList.add('font1');
    }

    if (savedTheme) {
        document.getElementById(savedTheme).checked = true;
        body.classList.add(savedTheme);
    } else {
        body.classList.add('theme1');
    }

    fontRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            body.classList.remove('font1', 'font2', 'font3');
            body.classList.add(this.value);
            localStorage.setItem('selectedFont', this.id);
        });
    });

    themeRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            body.classList.remove('theme1', 'theme2', 'theme3', 'theme4');
            body.classList.add(this.value);
            localStorage.setItem('selectedTheme', this.id);
        });
    });
});

function toggleOriginal(index) {
    const original = document.getElementById(`original-${index}`);
    original.style.display = original.style.display === 'none' || original.style.display === '' ? 'block' : 'none';
}

function renderContent(data) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'translation';
        div.innerHTML = `
            <div class="kr-text" onclick="toggleOriginal(${index})">
                <span contenteditable="true" class="editable" data-index="${index}">${item.kr}</span>
            </div>
            <div id="original-${index}" class="original">${item.jp}</div>
        `;
        content.appendChild(div);
    });

    document.getElementById('nextFileInput').style.display = 'block';
    document.getElementById('saveButton').style.display = 'block';
}

function loadFile(file) {
    currentFileName = file.name;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const content = e.target.result;
            const data = JSON.parse(content);
            renderContent(data);
        } catch (error) {
            console.error("JSON 파일 파싱 오류:", error);
        }
    };
    reader.readAsText(file);
}

document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        loadFile(file);
    }
});

document.getElementById('nextFileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        loadFile(file);
        window.scrollTo(0, 0);
    }
});

document.getElementById('content').addEventListener('input', function(e) {
    if (e.target.classList.contains('editable')) {
        const index = e.target.getAttribute('data-index');
        currentData[index].kr = e.target.innerText;
    }
});

document.getElementById('content').addEventListener('click', function(e) {
    if (e.target.classList.contains('editable')) {
        e.stopPropagation(); // 편집 중 클릭 이벤트 전파 방지
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    const jsonString = JSON.stringify(currentData, null, 2);
    const blob = new Blob([jsonString], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('변경 사항이 저장되었습니다!');
});
