function groupWordsAndPrint(word_array=[]) {
    let group_word_obj = groupWordsWithKeys(word_array);
    printOutGroupWord(group_word_obj);
}

function groupWordsWithKeys(word_array=[]) {
    let group_obj = {};
    let input_len = word_array.length;

    for(let i=0; i<input_len; i++) {
        let keys = Object.keys(group_obj);
        let k_len = keys.length;
        
        if(k_len == 0) {
            group_obj[word_array[i]] = [];
            continue;
        }
        if(group_obj[word_array[i]] == undefined) {
            let flag = false;
            for(let k=0; k<k_len; k++) {
                if(sortString(keys[k]) == sortString(word_array[i])) {
                    group_obj[keys[k]].push(word_array[i]);
                    flag = true;
                }
            }
            if(!flag) {
                group_obj[word_array[i]] = [];
            }
        }
    }

    return group_obj;
}

function printOutGroupWord(obj) {
    let keys = Object.keys(obj);
    let k_len = keys.length;

    keys.forEach((key) => {
        console.log([key, ...obj[key]].join('-'));
    });
}

function sortString(str="") {
    return [...str].sort().join('');
}

module.exports = {groupWordsAndPrint};