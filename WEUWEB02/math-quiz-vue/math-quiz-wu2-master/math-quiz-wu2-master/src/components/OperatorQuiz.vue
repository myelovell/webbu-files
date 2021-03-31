<template>
  <div>
    <!-- Visa uttrycket genom att interpolera operanderna och operatorn -->
    <p>{{ operandLeft }} {{ operator }} {{ operandRight }}</p>

    <!-- Visa svarsalternativen för användaren -->
    <button
      v-for="(answer, index) of answers"
      :key="index"
      @click="selectAnswer(answer)"
    >
      {{ answer }}
    </button>

    <button @click="$emit('clearOperator')">Back</button>
  </div>
</template>

<script>
export default {
  name: "OperatorQuiz",
  props: ["operator"],
  data() {
    /* Variabler som används i quiz för att hålla koll på uttrycket,
    svarsalternativen och det korrekta svaret. */
    return {
      operandLeft: null,
      operandRight: null,
      answers: [],
      expectedAnswer: null
    };
  },
  methods: {
    selectAnswer(answer) {
      if (answer != this.expectedAnswer) {
        alert("Wrong! It was: " + this.expectedAnswer);
      }

      this.startQuiz();
    },
    startQuiz() {
      /* Quiz logik stegvis */
      /* 1. Slumpa två operander */
      this.operandLeft = Math.floor(Math.random() * 13);
      this.operandRight = Math.floor(Math.random() * 13);

      console.log("Operatorns värde:");
      console.log(this.operator);
      if (this.operator == "+") {
        /* 2. Beräkna korrekt svar */
        this.expectedAnswer = this.operandLeft + this.operandRight;

        /* 3. Generera felaktiga svar */
        this.answers = [
          this.operandLeft + this.operandRight + 1,
          this.operandLeft + this.operandRight + 2,
          this.operandLeft + this.operandRight + 3,
          this.operandLeft + this.operandRight - 1,
          this.operandLeft + this.operandRight - 2
        ];
      }

      /* 4. Blanda svaren, vi förenklar detta genom att ersätta
            ett av de felaktiga svaren med det som är korrekt. */
      const randIndex = Math.floor(Math.random() * this.answers.length);
      this.answers[randIndex] = this.expectedAnswer;
    }
  },
  created() {
    this.startQuiz();
  }
};
</script>

<style></style>
