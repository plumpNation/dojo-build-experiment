var profile = (function () {
    var copyOnly = function (filename, mid){
        var list = {
            'dojo/dojo.profile': 1,
            'dojo/package.json': 1
        };

        return (mid in list);
    };

    return {
        resourceTags: {
            amd: function (filename, mid) {
                var test = !copyOnly(filename, mid) && /\.js$/.test(filename);

                return test;
            },

            copyOnly: function (filename, mid){
                return copyOnly(filename, mid);
            }
        }
    };
})();
