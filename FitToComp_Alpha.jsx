app.beginUndoGroup("Fit to Comp Width and Height");
for (var i = 1; i <= app.project.numItems; i++) {
    var item = app.project.item(i);
    if (item instanceof CompItem) {
        var comp = item;
        var layers = comp.layers;
        for (var j = 1; j <= layers.length; j++) {
            var layer = layers[j];
            if (!layer.selected){
                if (layer.source.width > layer.source.height) {
                    var scale = (comp.height/layer.source.height)*100;
                    layer.transform.scale.setValue([scale, scale]);
                } else {
                    var scale = (comp.width/layer.source.width)*100;
                    layer.transform.scale.setValue([scale, scale]);
                }
            }
        }
    }
}
app.endUndoGroup();

// FitToComp_alpha - 2023.01.24 Ryo Shimabukuro 
