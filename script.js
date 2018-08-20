//EXEMPLO 01 

let minimo = 1000;
let emprestimo;

let idade = prompt(" Qual a sua idade");
    if (idade >=21 &&  idade < 61){
       
        let renda = prompt("Qual a sua renda");
        console.log(idade);
       
        if (renda>=1500){
             emprestimo = renda*20; 
            
            alert = (`Valor minino de emprestimo = R$ 1.000 | Valor maximo ${emprestimo}`);

            let valorEmpre = prompt("Qual o valor do emprestimo ");

            console.log(emprestimo);
            if(emprestimo <minimo && emprestimo > emprestimo){
                alert = ("INFORMAÇÕES ERRADAS");
                
            }else{
                alert = ("Emprestimo aprovado");
                 

                let parcela = prompt("qual a quantidade de parcelas | limite de 36");
                    if (parcela >=1 && parcela <37){
                       let parcelames = emprestimo/parcela;
                        let juros = parcelames*0.06;
                        let parcelajuros = juros*parcela;
                        console.log (parcelajuros)
                    
                    }
                
            }         
           
        }

    }else{
     alert("Operação encerrada");

    }

