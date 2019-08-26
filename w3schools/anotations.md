# **Tutorial JavaScript**

## **JavaScript - Onde?**

### **A tag \<script>**

No HTML o código JavaScript deve estar alocado entre as tags \<script> e \</script>.

### **Funções e Eventos JavaScript**

Uma função JavaScript é um bloco de código que pode ser "chamado".

Uma função pode ser chamada quando um **evento** ocorre, exemplo, quando o usuário clicar em um botão.

### **JavaScript nas áreas \<head> ou \<body>**

Podemos usar quaisquer números de scripts no documento HTML, os scripts podem ser adicionados tamto na \<head> quanto no \<body>.

### **Javascript externo**

Scripts podem ser colocados em um arquivo externo.

Arquivos JavaScript tem a extensão de arquivo **.js**.

Para usar um script externo, coloque o nome do arquivo do script no atributo **src** (source) da tag \<script>. O script vai se comportar como se estivesse localizado naquele local do código.

#### **Exemplo:**

myScript.js
```
function myFunction() {
  document.getElementById("demo").innerHTML = "O paragráfo mudou.";
}
```

index.html
```
... (código omitido)
\<script src="myScript.js">\</script>
... (código omitido)
```

### **Vantagens do JavaScript externo**

- Separa o HTML do código;
- Faz com que o HTML e o JavaScript sejam mais faceis de ler e dar manutenção;
- Scripts salvos em cache aceleram o carregamento da página.

## **JavaScript - Saída**

