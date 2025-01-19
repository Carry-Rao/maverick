function toggleText() {

    const description = document.getElementById('description');

    if (description.textContent === '这是一个简单的网站示例，展示基本的HTML、CSS和JavaScript用法。') {

        description.textContent = '文本已被切换！';

    } else {

        description.textContent = '这是一个简单的网站示例，展示基本的HTML、CSS和JavaScript用法。';

    }

}