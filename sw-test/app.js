if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/https-demos/sw-test/sw.js', { scope: '/https-demos/sw-test/' })
        .then(function (reg) {
            // registration worked
            console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch(function (error) {
            // registration failed
            console.log('Registration failed with ' + error);
        });
}