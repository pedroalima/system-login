# System Login

Um projeto que simula um sistema de login, baseado em três páginas, uma para entrar na conta, uma para cadastrar o usuário e outra que representa o aplicativo alvo, que utilizaria esse sistema. Os usuário podem cadastrar uma conta, passando por um sistema de validação exigente e entrar na conta.

Um projeto de autoria própria, com desing e features inspirados em outras aplicações já existentes. Desenvolvido com TypeScript, React e Bootstrap. Este foi o meu resultado: 💻<https://system-login-chi.vercel.app/>.

![#](./public/Frame1.png)

</br>

## 🎯 Objetivos

Os usuários devem ser capazes de:

> - Ver o layout ideal para a interface de acordo com o tamanho de tela do seu dispositivo
> - Ver os estados de "hover" e "focus" para todos os elementos interativos na página
> - Cadastrar uma conta (armazenada no local storage do navegador)
> - Fazer login (permanecendo logado mesmo após atualizar ou fechar o navegador)
> - Receba mensagens de validação do formulário se:
> - * Um campo for deixado em branco
> - * O endereço de e-mail não estiver cadastrado
> - * O endereço de e-mail já estiver cadastrado
> - * O endereço de e-mail não corresponder ao modelo padrão (exemplo@dominio.com)
> - * O campo de confirmação de e-mail não for igual ao de e-mail
> - * O campo de senha for menor que 8 e maior que 20 caracteres
> - * O campo de confirmação de senha não for igual ao de senha

</br>

## 🔧 Propriedades e Tecnologias

> - Vite
> - TypeScript
> - React
> - React Router DOM v6
> - React Hook Form
> - React Context API
> - Yup
> - Validation
> - Regex
> - Bootstrap 4
> - SASS

</br>

## 🧠 Meu aprendizado

> - TypeScript
> - React Context API
> - Regex

Por se tratar de um sitema de campos de formulário o projeto tem a finalidade de consolidar meu conhecimento de validação, o desafio foi realizar tudo isso nas redeas do TypeScript, incorporando o React Context API e expressões regulares (Regex), para um resultado mais exigente.

React.ts:
```ts
...
import { createContext, useEffect, useState } from "react";

import { AuthContextProps, AuthContextData, User } from "../types/Context";

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children } : AuthContextProps) => {
	const [ user, setUser ] = useState<object | null | undefined>();

	useEffect(() => {...
	}, []);

	const signin = (email: string, password: string) => {...
	};

	const signup = (email: string, password: string) => {...
	};

	const logout = () => {...
	};

	return (
		<AuthContext.Provider value={{ user, signed: !!user, logout, signup, signin }}>
			{children}
		</AuthContext.Provider>
	);
};
...
```

Imagine que você está construindo um aplicativo React que armazena dados em um componente pai. Neste aplicativo, você precisa passar esses dados para um componente distante do pai, então, você vai passando os dados por uma relação de componentes pai e filho por Props, até chegar no componente desejado, isso se chama Prop drill. Em projetos pequenos é valido utilizar essa técnica, contudo em projetos maiores é insustentável, para resolver esse problema o React tem o recurso do Context API. Acima vemos uma representação de um contexto, que poderá ser compartilhado com qualquer componente de maneira muito mais rápida.

[saiba mais!](https://www.codecademy.com/resources/docs/react/context)

</br>

React.ts:
```ts
...
export interface AuthContextData {
    signed: number | boolean;
    user: object | null | undefined;
    signin: (email: string, password: string) => void;
    signup: (email: string, password: string) => void;
    logout: () => void;
}
...
```

Um dos aspectos desenvolvidos do TypeScript é a diferença entre o "type" e o "interface". A maior diferença é que o "interface" só pode ser usado para digitar objetos, enquanto "type" pode ser usado para digitar objetos, primitivos e muito mais. Dessa forma, o  "interface", é a combinação perfeita para escrever programas orientados a objetos.

[saiba mais!](https://www.typescriptlang.org/docs/handbook/interfaces.html)

</br>

```ts
...
const schema = object().shape({
	email: string()
		.required("E-mail is a required!")
		.matches(/^[\w\d.]+@[\w]+\.[\w]{3}(\.[\w]{2})?$/, "Invalid e-mail"),
	...
});
...
```

O React Hook Forms é uma ferramenta indispensável para a validação de formulários, juntamente com Yup e Regex, o céu é o limite. Acima temos uma representação de uma expressão regular entre barras (/). 
> - O acento circunflexo "^", no começo, e o cifrão "$", no fim, são usados para definir o inicio e o final de uma string.
> - "[]" permitem que correspondamos a um caractere de uma série de caracteres
> - "\w" é uma abreviação da classe de caracteres que representa o intervalo regex [A-Za-z0-9_] e corresponde a um único caractere maiúsculo, minúsculo, dígito ou sublinhado.
> - "\d" é uma abreviação da classe de caracteres que representa o intervalo regex [0-9] e corresponde a um único caractere.

[saiba mais!](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions)

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://system-login-chi.vercel.app/>.

![#](./public/signup.gif) ![#](./public/signup-already.gif) ![#](./public/mobile%20(3).png)

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)