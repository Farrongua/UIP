<script>
export default{
    data(){
        return{
            previous: null,
            current: '',
            operator: null,
            operatorClicked: false,
            equalClicked: false,
        }
    },
    methods: {
        clear() { this.current = ''; },
        sign() { 
            this.current = this.current.charAt(0) === '-' ?
            this.current.slice(1) : `-${this.current}`;
        },
        percent() { this.current = `${parseFloat(this.current) / 100}`},
        append(number) {
            if(this.operatorClicked){
                this.current = '';
                this.operatorClicked = false;
            }
            if(this.equalClicked){
                this.current = '';
                this.equalClicked = false;
            }
            this.current = `${this.current}${number}`
        },
        dot() {
            if(this.current.indexOf('.') === -1) { this.append('.')}
        },
        add() {
            this.operator = (a, b) => a + b;
            this.setPrevious();           
        },
        minus(){
            this.operator = (a, b) => b - a;
            this.setPrevious();
        },
        multiplic(){
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        division() {
            this.operator = (a, b) => b / a;
            this.setPrevious();
        },
        equal(){
            this.current = `${this.operator(parseFloat(this.current), parseFloat(this.previous))}`;
            this.previous = null;
            this.equalClicked = true;
        },
        setPrevious() {
            this.previous = this.current;
            this.operatorClicked = true;
        }
    },
     

}


</script>

<template>
<a-form
			style="width: 100%"
			:model="formState"
			name="basic"
			:label-col="{ span: 4 }"
			:wrapper-col="{ span: 20 }"
			autocomplete="off"
	>
    <div class = "calculator">
        <div data-cy="res" class = "rezult"> {{current || '0'}} </div>

        <a-button data-cy="clear" html-type="button" @click="clear">C</a-button>
        <a-button data-cy="sign" html-type="button" @click="sign">+/-</a-button>
        <a-button data-cy="percent" html-type="button" @click="percent">%</a-button>
        <a-button data-cy="div" html-type="button" @click="division">/</a-button>
        <a-button data-cy="7" html-type="button" @click="append('7')">7</a-button>
        <a-button data-cy="8" html-type="button" @click="append('8')">8</a-button>
        <a-button data-cy="9" html-type="button" @click="append('9')">9</a-button>
        <a-button data-cy="mult" html-type="button" @click="multiplic">x</a-button>
        <a-button data-cy="4" html-type="button" @click="append('4')">4</a-button>
        <a-button data-cy="5" html-type="button" @click="append('5')">5</a-button>
        <a-button data-cy="6" html-type="button" @click="append('6')">6</a-button>
        <a-button data-cy="minus" html-type="button" @click="minus">-</a-button>
        <a-button data-cy="1" html-type="button" @click="append('1')">1</a-button>
        <a-button data-cy="2" html-type="button" @click="append('2')">2</a-button>
        <a-button data-cy="3" html-type="button" @click="append('3')">3</a-button>
        <a-button data-cy="add" html-type="button" @click="add">+</a-button>
        <a-button data-cy="0" html-type="button" @click="append('0')">0</a-button>
        <a-button data-cy="dot" html-type="button" @click="dot">.</a-button>
        <a-button data-cy="equal" type="primary"  @click="equal">=</a-button>

    </div>

</a-form>

    
</template>

<style scoped>
.calculator {
     font-size: 15px; 
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-auto-rows: minmax(1fr, auto);
}

.rezult {
    grid-column: 1 / 5;
   	border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 7px;
    border-radius: 2px;
}

</style>