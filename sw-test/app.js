if ('serviceWorker' in navigator) {
    document.querySelector("#support").innerHTML = '支持';
    navigator.serviceWorker.register('/https-demos/sw-test/sw.js', {scope: '/https-demos/sw-test/' })
        .then(function (reg) {
            document.querySelector("#success").innerHTML = '注册成功';
            var serviceWorker;
            if (reg.installing) {
                serviceWorker = reg.installing;
                document.querySelector("#state").innerHTML = 'installing';
            } else if (reg.waiting) {
                serviceWorker = reg.waiting;
                document.querySelector("#state").innerHTML = 'waiting';
            } else if (reg.active) {
                serviceWorker = reg.active;
                document.querySelector("#state").innerHTML = 'active';
            }
            if (serviceWorker) {
                document.querySelector("#swState").innerHTML = serviceWorker.state;
                serviceWorker.addEventListener('statechange', function (e) {
                    console.log(e.target.state)
                    document.querySelector("#swState").innerHTML += '&emsp;状态变化为' + e.target.state;
                });
            }
            // reg worked
            console.log('reg succeeded. Scope is ' + reg.scope);
        }).catch(function (error) {
            // reg failed
            document.querySelector("#success").innerHTML = '注册没有成功';            
            console.log('reg failed with ' + error);
        });
} else {
    document.querySelector("#support").innerHTML = '不支持';
}