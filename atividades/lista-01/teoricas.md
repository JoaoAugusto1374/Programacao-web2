### 1. Tipagem em Linguagens de Programação

* **a) Tipagem Estática:** Uma linguagem de tipagem estática exige a definição dos tipos das variáveis antes de utilizá-las ou no momento de sua declaração, permitindo que o compilador/interpretador entenda explicitamente o tipo de dado que o elemento armazenará. Essa verificação ocorre durante o tempo de compilação (ou antes do tempo de execução).
* **b) Benefícios de Performance e Segurança:** Em termos de performance e segurança, os principais benefícios da tipagem estática incluem:
  * **Prevenção de Coerção Indesejada:** Evita conversões implícitas acidentais de tipos ao manipular variáveis.
  * **Segurança de Tipos:** Impede a passagem de valores incompatíveis com o tipo declarado, identificando erros ainda no desenvolvimento.
  * **Otimização:** Aumenta a performance, pois o código pode ser otimizado pelo compilador antes da execução, já que a estrutura de memória necessária é conhecida antecipadamente.
* **c) Tipagem Dinâmica e Performance:** Na tipagem dinâmica, o interpretador infere o tipo da variável durante o tempo de execução (*runtime*) com base no valor atribuído a ela. Sob o ponto de vista de desempenho, a verificação e resolução contínua de tipos em tempo de execução adiciona um *overhead* (custo de processamento), tornando a execução geralmente mais lenta do que em linguagens estaticamente tipadas.
* **d) Tipagem Forte vs. Tipagem Fraca:**
  * **Tipagem Forte:** Restringe ou proíbe a coerção implícita de tipos, exigindo conversões explícitas em operações entre tipos diferentes. Caso ocorra uma incompatibilidade, a linguagem lança um erro.
  * **Tipagem Fraca:** Permite e realiza coerções implícitas de tipos automaticamente, aceitando operações entre dados de tipos distintos (o que pode gerar resultados inesperados se não houver cuidado).
* **e) [Reservado/Não preenchido]**
* **f) O Caso do JavaScript:** A linguagem JavaScript possui tipagem **dinâmica e fraca**. Não é necessário declarar o tipo de dado de uma variável (ele é determinado em tempo de execução) e a linguagem realiza coerções automáticas ao combinar tipos diferentes em operações (por exemplo, somar um número com uma *string*).