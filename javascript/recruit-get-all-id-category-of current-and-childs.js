var obj = {
    /*
     Input:
        data = [{
            "_id" : "1",
            "parentId" : "thisPostId",
            "topLevelId" : "1",
            "text" : "<p>comment</p>",
        },
        {
            "_id" : "2",
            "parentId" : "1",
            "topLevelId" : "1",
            "text" : "<p>reply to comment</p>",
        },
        {
            "_id" : "3",
            "parentId" : "2",
            "topLevelId" : "1",
            "text" : "<p>reply to reply to comment</p>",
        },
        {
            "_id" : "4",
            "parentId" : "3",
            "topLevelId" : "1",
            "text" : "<p>reply to reply to reply to comment</p>",
        }]

     Output:
        ["1","2","3","4"]
     */
    getCategoryIds: function(arr, id) {
        //arr = arr || data;
        var ret = [];

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];

            if (item.parent_id == id || item.id == id) {
                if (ret.indexOf(item.id) < 0) {

                    ret.push(item.id);

                    var newret = []
                    for (var x = 0; x < arr.length; x++) {
                        if (x != i) newret.push(arr[x]);
                    }

                    var children = upsell.getCategoryIds(newret, item.id);
                    if (children.length > 0) {
                        for (var j = 0; j < children.length; j++) {
                            if (!(ret.indexOf(children[j]) >= 0)) { ret.push(children[j]); }
                        }
                    }
                }
            }
        }

        return ret;
    }
}
