function onClick(){
	GENOM_LENGTH = parseInt(document.getElementById('length').value,10);
	MAX_GENOM_LIST = parseInt(document.getElementById('number').value,10);
	SELECT_GENOM = parseInt(document.getElementById('eliteNumber').value,10);
	INDIVIDUAL_MATATION = parseFloat(document.getElementById('individualMutation').value);
	GENOM_MUTATION = parseFloat(document.getElementById('genomMutation').value);
	MAX_GENERATION = parseInt(document.getElementById('maxGeneration').value,10);

	main();
}

/**
 * メイン演算関数
 */
function main(){
	let group = new Array(10);
	for(let j = 0; j < MAX_GENOM_LIST; j++){
		g = createGenom(GENOM_LENGTH);
		group[j] = g;
	}
	for(let count = 0;count < MAX_GENERATION;i++){
		for(let i = 0;i < MAX_GENOM_LIST;i++){	
			group[i].setEvaluation(evaluation(group[i]));
		}
		let eliteGenes = select(group,SELECT_GENOM);
		let progenyGenes = Array(SELECT_GENOM);
		for(let i = 1;i < SELECT_GENOM;i++){
			progenyGenes.push(crossover(eliteGenes[i - 1],eliteGenes[i]));
		}
		group = createNextGeneration(group,eliteGenes,progenyGenes);
		group = mutation(group);

		document.getElementById('log').innerHTML = 
		document.getElementById('log').value + 
		"<h2>第" + count + "世代</h2>" + 
		"<div>Min = " + min(group,function (ge) {return ge}) + "</div>" + 
		"<div>Max = " + max(group,function (ge) {return ge}) + "</div>" + 
		"<div>Avg = " + sum(group,function (ge) {return ge}) / group.length + "</div>" + 
		"<div>The best = " + eliteGenes[0].getGenom() + "</div>";

	}
}

/**
 * ランダムな遺伝子情報の生成
 * @param 遺伝子情報の長さ
 * @return 生成した個体集団 genomClass
 */
function createGenom(length){
	let genomList = new Array(GENOM_LENGTH);
	for(i = 0;i < length;i++){
		genomList.push(Math.floor(Math.random() * 2));
	}
	ge = new Genom(genomList,0);
	return ge;
}

/**
 * 評価関数
 * @param 評価を行うgenomClass
 * @return 0.00 ~ 1.00の評価
 */
function evaluation(genom){
	total = sum(genom.getGenom(),function (ge) {
		return ge;
	});
	return total / genom.getGenom.length;
}

/**
 * エリート選択関数
 * @param 選択を行うgenomClass配列
 * @param エリートの数
 * @return 選択を行ったエリートクラス
 */
function select(genom,elite){
	result = sort(genom,function (a,b) {
		return a.getEvaluation() > b.getEvaluation();
	});
	return result.slice(0,elite);
}

/**
 * 交叉関数
 * @param 個体A
 * @param 個体B
 * @return 子孫を格納したgenomClass配列
 */
 function crossover(genomA,genomB){
 	let genomList = new Array(2);
 	crossA = Math.random(0,GENOM_LENGTH);
 	crossB = Math.random(crossA, GENOM_LENGTH);
 	A = genomA.getGenom();
 	B = genomB.getGenom();
	progenyA = new Array(GENOM_LENGTH);
	progenyB = new Array(GENOM_LENGTH);
	{
		for(i = 0;i < crossA;i++)
			progenyA[i] = A[i];
		for(i = crossA;i < crossB;i++)
			progenyA[i] = B[i];
		for(i = crossB;i < GENOM_LENGTH;i++)
			progenyA[i] = A[i];
	}
	{
		for(i = 0;i < crossA;i++)
			progenyB[i] = B[i];
		for(i = crossA;i < crossB;i++)
			progenyB[i] = A[i];
		for(i = crossB;i < GENOM_LENGTH;i++)
			progenyB[i] = B[i];
	}
	genomList[0] = new Genom(progenyA,0);
	genomList[1] = new Genom(progenyB,0);
	return genomList;
 }

 /**
  * 世代交代処理
  * @param 現代世代集団
  * @param 現代世代エリート集団
  * @param 現代世代子孫集団
  * @return 次世代個体集団
  */
function createNextGeneration(genom,elite,progeny){
	nextGeneration = sort(genom,function (a,b){
		return a.evaluation > b.evaluation;
	})
	for(i = 0;i < elite.length + progeny.length;i++)
		nextGeneration.shift();
	nextGeneration.push(elite);
	nextGeneration.push(progeny);
	return nextGeneration;
}
/**
 * 突然変異関数
 * @param 突然変異をするgenomClass配列
 * @param 個体の突然変異率
 * @param 遺伝子の突然変異率
 * @param 突然変異をしたgenomClass配列
 */
function mutation(genom){
	individualList = new Array(genom.length);
	for(i = 0;i < genom.length;i++){
		if(INDIVIDUAL_MATATION > (Math.random()) * 100){
			genomList = new Array(genom[i].getGenom().length);
			for(j = 0;j < genom[i].length;j++){
				if(GENOM_MUTATION > (Math.random() * 100))
					genomList.push(Math.floor(Math.random() * 2));
				else
					genomList.push(genom[i].getGenom());
			}
			genom[i].setGenom(genomList);
		}
		individualList[i] = genom[i];
	}
	return individualList;
}

function min(array,callback){
	ans = callback(array[0]);
	for(let i = 1;i < array.length;i++){
		if(ans > callback(array[i]))
			ans = callback(array[i]);
	}
	return ans;
}
function max(array,callback){
	ans = callback(array[0]);
	for(let i = 1;i < array.length;i++)
		if(ans > callback(array[i]))
			ans = callback(array[i]);
	return ans;
}
function sum(array,callback){
	total = 0;
	for(let i = 0;i < array.length;i++)
		total += callback(array[i]);
	return total;
}
function sort(array,callback){
	let newArray = array.concat();
	for(let i = 0;i < newArray.length - 2;i++){
		for(let j = i + 1;j < newArray.length - 1;j++){
			if(callback(newArray[i],newArray[j])){
				num = newArray[i];
				newArray[i] = newArray[j];
				newArray[j] = num;
			}
		}
	}
	return newArray;
}

class Genom{
	constructor(genomList,evaluation){
		this.genomList = genomList;
		this.evaluation = evaluation;
	}

	getGenom(){
		return this.genomList;
	}
	getEvaluation(){
		return this.evaluation;
	}
	setGenom(genomList){
		this.genomList = genomList;
	}
	setEvaluation(evaluation){
		this.evaluation = evaluation;
	}
}