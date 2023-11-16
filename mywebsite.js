const func1 = () => {
    alert('こんにちは！！')
}

const func2 = () => {
    if (confirm("OK？")){
        window.location.href = "myWebsite2.html"
    }else{
        alert('OKを押してくれないのか...')
    }
}

const func3 = () => {
    const element = document.getElementById('js')
    element.innerHTML = 'テキストが増えました！！'
}
