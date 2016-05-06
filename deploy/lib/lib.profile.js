var profile = (function () {
    var copyOnly = function (filename, mid){
        var list = {
            'lib/lib.profile' : true,
            'lib/package.json': true
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
