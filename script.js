//705.484.450-52
class validCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    } 

    éSeque(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraCpf(){
        let cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        let digito1 = this.geraDigito(cpfSemDigitos)
        let digito2 = this.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    geraDigito(cpfSemDigitos){
        let tot = 0
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos){
            //console.log(stringNumerica, typeof stringNumerica)
            tot += reverso * Number(stringNumerica)
            reverso--
        }

        let digito = 11 - (tot % 11)
        return digito <= 9 ? String(digito) : '0'
    }


    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.éSeque()) return false
        !this.geraCpf()
        console.log(this.novoCPF)
        return this.novoCPF === this.cpfLimpo
    }
}

let validacpf = new validCpf ('705.484.450-52')

    if(validacpf.valida()){
        console.log('cpf valido')
    } else {
        console.log('deu ruim')
    }