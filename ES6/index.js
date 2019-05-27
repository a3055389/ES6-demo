
const scanf=require('scanf');
// 幸运数字
// let arr=[];
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---显示全部幸运数字');
//     console.log('3---删除最后一个数字');
//     console.log('4---退出');
//     let a=scanf('%d');
//     if(a===1){
//         console.log('请输入数字');
//         let b=scanf('%d');
//         arr.push(b);
//         console.log( '成功'+b);
//     }
//     if(a===2) {
//         for(let i=0; i<arr.length; i++){
//             console.log('第' + (i + 1) +'个幸运数字是：'+arr[i])
//         }

//     }
//     if(a===3){
//         console.log('请输入要删除第几个');
//         let c=scanf('%d');
//         console.log('已删除第'+ c + '个数字');
//         c=c-1;
//         arr.splice(c,1);
//     }
// }



// 添加坐标
// let arr=[]
// while(1){
//         console.log('1---添加一个坐标');
//         console.log('2---显示全部坐标');
//         console.log('3---删除某一个坐标');
//         console.log('4---退出');
//         let con=scanf('%d');  //输入一个数字
//         if(con===1){
//             console.log('1---添加一个坐标');
//             console.log('请输入横坐标：');
//             let x=scanf('%d');
//             console.log('请输入纵坐标：');
//             let y=scanf('%d');
//             let zuobiao={
//                 'x':x,
//                 'y':y
//             };
//             arr.push(zuobiao);  //往数组中添加一个数字
//             console.log('添加坐标成功');
//             scanf('%d');
//         }
//         if(con===2){
//             console.log('2---显示全部坐标');
//             for(let i=0;i<arr.length;i++){
//                 let larr=arr[i];
//                 console.log(`第${i+1}个坐标为(${larr.x},${larr.y})`);
//             }
//             console.log('点击回车继续');
//             scanf('%d');
//         }
//         if(con===3){
//             console.log('请输入要删除第几个');
//                 let c=scanf('%d');
//                 console.log('已删除第'+ c + '个坐标');
//                 c=c-1;
//                 arr.splice(c,1);
//         }
//         if(con===4){
//             console.log('退出');
//             break;
//         }
//     }

console.log('学生成绩管理系统');
let arr=[];
while(1){
    console.log('1、添加一个学生学科成绩');
    console.log('2、显示全部学生学科成绩');
    console.log('3、删除一个学生学科成绩');
    console.log('4、退出');
    let a=scanf('%d'); 
    if(a===1){
        console.log('添加一个学生学科成绩');
        console.log('请输入学生姓名：');
        let xingming=scanf('%s');
        console.log('请输入语文成绩：');
        let yuwen=scanf('%d');
        console.log('请输入数学成绩：');
        let shuxue=scanf('%d');
        let student={
            'xingming':xingming,
            'yuwen':yuwen,
            'shuxue':shuxue
        };
        arr.push(student);
        console.log('添加成绩成功');
        scanf('%d');
    }
    if(a===2){
        console.log('显示全部学生学科成绩');
        for(let i=0;i<arr.length;i++){
            let larr=arr[i];
            console.log(`学生：${larr.xingming}\n语文：${larr.yuwen}\n数学：${larr.shuxue}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if(a===3){
        console.log('删除最后一个学生成绩');
        console.log('请输入要删除第几个');
        let c=scanf('%d');
        console.log('已删除第'+ c + '个学生成绩');
        c=c-1;
        arr.splice(c,1);
    }
    if(a===4){
        console.log('退出');
        break;
    }
}