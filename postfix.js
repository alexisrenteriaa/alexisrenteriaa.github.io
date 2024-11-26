class PostfixEvaluator {
    constructor() {
        this.stack = [];
        this.tokens = [];
        this.currentIndex = 0;
    }

    // Reinicia la pila y los índices
    reset(expression) {
        this.stack = [];
        this.tokens = expression.trim().split(/\s+/);
        this.currentIndex = 0;
    }

    // Ejecuta un paso del algoritmo
    step() {
        if (this.currentIndex >= this.tokens.length) {
            return { done: true, message: "Evaluación completa." };
        }

        const token = this.tokens[this.currentIndex++];

        if (!isNaN(token)) {
            this.stack.push(Number(token));
        } else {
            if (this.stack.length < 2) {
                throw new Error("Error: No hay suficientes operandos en la pila.");
            }

            const b = this.stack.pop();
            const a = this.stack.pop();

            let result;
            switch (token) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    if (b === 0) throw new Error("Error: División por cero.");
                    result = a / b;
                    break;
                default:
                    throw new Error(`Operador no válido: ${token}`);
            }

            this.stack.push(result);
        }

        return { done: false };
    }

    // Evalúa completamente la expresión
    evaluate() {
        while (this.currentIndex < this.tokens.length) {
            this.step();
        }

        if (this.stack.length !== 1) {
            throw new Error("La expresión no es válida.");
        }

        return this.stack[0];
    }

    // Obtiene el estado actual de la pila
    getStack() {
        return [...this.stack];
    }
}

// Instancia del evaluador
const evaluator = new PostfixEvaluator();

// Actualiza el área de visualización de la pila
function updateStackDisplay() {
    const stackDiv = document.getElementById("stack");
    stackDiv.innerHTML = "";

    evaluator.getStack().forEach((item) => {
        const div = document.createElement("div");
        div.className = "stack-item";
        div.textContent = item;
        stackDiv.appendChild(div);
    });
}

// Evalúa la expresión completa
function evaluateExpression() {
    const expression = document.getElementById("expression").value;

    try {
        evaluator.reset(expression);
        const result = evaluator.evaluate();
        document.getElementById("result").textContent = `Resultado: ${result}`;
        updateStackDisplay();
    } catch (error) {
        alert(error.message);
    }
}

// Ejecuta la evaluación paso a paso
function stepByStep() {
    try {
        const result = evaluator.step();
        updateStackDisplay();

        if (result.done) {
            document.getElementById("result").textContent = `Resultado: ${evaluator.getStack()[0]}`;
        }
    } catch (error) {
        alert(error.message);
    }
}

// Limpia todos los datos
function clearAll() {
    evaluator.reset("");
    document.getElementById("expression").value = "";
    document.getElementById("result").textContent = "";
    updateStackDisplay();
}
