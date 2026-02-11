async function ask() {
    const question = document.getElementById("question").value;
    const answerDiv = document.getElementById("answer");

    if (!question) {
        answerDiv.innerText = "请输入问题。";
        return;
    }

    answerDiv.innerText = "思考中...";

    try {
        const response = await fetch("https://baspawen-ai.onrender.com/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: question })
        });

        const data = await response.json();
        answerDiv.innerText = data.answer;

    } catch (error) {
        answerDiv.innerText = "服务器连接失败。";
    }
}
