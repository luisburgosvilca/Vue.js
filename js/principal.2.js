var app = new Vue({
    el   : '#app',
    data : {
        lista : [
                    {nombre: 'Camilo', promedio: '15', estado: true},
                    {nombre: 'Bryan', promedio: '20', estado: true},
                    {nombre: 'Luis', promedio: '07', estado: false}
        ],
        nombre:'',
        promedio:''
    },
    methods: {
        agregarNota : function(){
            estadoA=false;
            if(this.promedio>=12.5){
                estadoA=true;
            }
            if(this.nombre!="" && this.promedio!=""){
                this.lista.push({nombre:this.nombre,promedio:this.promedio,estado:estadoA});
                this.nombre="";
                this.promedio="";
            }else{
                alert('Ingrese nombre y promedio por favor');
            }
        }
    },
 
})