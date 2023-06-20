function caculate() {
  const students = [
    {
      name: 'Ana',
      firstNote: 8,
      secondeNote: 6,
    },
    {
      name: 'Karol',
      firstNote: 7,
      secondeNote: 4,
    },
    {
      name: 'Lucas',
      firstNote: 5,
      secondeNote: 7,
    },
    {
      name: 'Arkie',
      firstNote: 10,
      secondeNote: 9,
    }
  ]

  alert('Bem vindo a calculadora de médias.')

  function calculateAvg(name, note1, note2) {
    let average = ((note1 + note2) / 2).toFixed(1)
    average = Number(average)
    
    let finalResult

    if (average >= 7) {
      finalResult = `A média do(a) aluno(a) ${name} é: ${average}
      Parabéns, ${name}! Você foi aprovado(a) no concurso!`
    } else {
      finalResult = `A média do(a) aluno(a) ${name} é: ${average}
      Não foi dessa vez, ${name}! Tente novamente!`      
    }

    return finalResult
  }

  for (let student of students) {
    alert(calculateAvg(student.name, student.firstNote, student.secondeNote))
  }
}