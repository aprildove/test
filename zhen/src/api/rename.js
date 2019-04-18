var fs = require('fs')

var PATH = './images' // 目录

//  遍历目录得到文件信息
function walk(path, callback) {
    var files = fs.readdirSync(path)
 
    files.forEach(function(file, i){
        if (fs.statSync(path + '/' + file).isFile()) {
            callback(path, file, i)
        }
    })
}

// 修改文件名称
function rename (oldPath, newPath) {
    fs.renameSync(oldPath, newPath)
}

// 运行
walk(PATH, function (path, fileName, i) {
    var oldPath = path + '/' + fileName, // 源文件路径
        newPath = path + '/'+ fileName.replace(fileName, i + '.jpg') // 新路径
    rename(oldPath, newPath)
})