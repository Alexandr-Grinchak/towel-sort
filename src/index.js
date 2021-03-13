
// You should implement your task here.

module.exports = function towelSort (matrix) {
        if(!Array.isArray(matrix)) {
            return [];
        }
        let res=[];
        for(let i = 0; i < matrix.length; i++) {
            if(i % 2 != 0){
                matrix[i] = matrix[i].reverse();
            }
        }
            res = res.concat(...matrix);
        
        return res;
        
        }
