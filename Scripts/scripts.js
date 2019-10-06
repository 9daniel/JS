var tb = document.getElementsByClassName("Ltb");

        for(var i = 0; i <= tb.length; i++ )
        {
            tb[i].addEventListener("mouseover", function(){
                this.classList.remove("voltarNormal");
                this.classList.add("ativo");  
            })

            tb[i].addEventListener("mouseleave", function(){
                this.classList.remove("ativo");
                this.classList.add("voltarNormal");  
            })
        }


        function NomeDaFuncao()
        {
            var w = document.getElementById("mensagem");
            
            var I = document.getElementById("x");
            var x = I.value;

            if(x >= 18){
                w.innerHTML = "Maior de Idade. Pode comprar bebidas alcolicas";
                w.classList.remove("erro");
                w.classList.add("sucesso");
            } 
            else{
                w.innerHTML = "Menor de Idade. Seu pai vai preso!!! Ops Não tem pai.";
                w.classList.remove("sucesso");
                w.classList.add("erro");
            }
            
            return x;
        }

        function funcao2()
        {
            var x = document.getElementById("x");
            x.classList.add("fakeBootstrap");
        }
        
        function funcao3(){
            var x = document.getElementById("x");
            x.classList.remove("fakeBootstrap");
        }
        