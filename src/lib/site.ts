export const site = {
  name: "Dr. Thiago Reis",
  title: "Dr. Thiago Reis",
  role: "Odontologia · Endodontia",
  address: "",
  instagram: "",
};
export const units = [
  { id: "santaluz", clinic: "NIOS", name: "Santaluz", address: "Joaquim de Góes, 38 — Centro, Santaluz - BA, CEP 48880-000", maps: "https://www.google.com/maps/search/?api=1&query=Joaquim+de+G%C3%B3es%2C+38%2C+Centro%2C+Santaluz+-+BA%2C+48880-000", phone: "5575981401503", displayPhone: "(75) 98140-1503", message: "Olá! Vim pelo site do Dr. Thiago Reis e gostaria de agendar um horário com ele na unidade de Santaluz." },
  { id: "valente", clinic: "COI", name: "Valente", address: "Rua Landulfo Alves, 139 — Centro, Valente - BA, CEP 48890-198", maps: "https://www.google.com/maps/search/?api=1&query=Rua+Landulfo+Alves%2C+139%2C+Centro%2C+Valente+-+BA%2C+48890-198", phone: "5575981444698", displayPhone: "(75) 98144-4698", message: "Olá! Vim pelo site do Dr. Thiago Reis e gostaria de agendar um horário com ele na unidade de Valente." },
] as const;
export const whatsappForUnit = (unit: typeof units[number]) => `https://wa.me/${unit.phone}?text=${encodeURIComponent(unit.message)}`;
export const nav = [
  { href: "#apresentacao", label: "Apresentação" },
  { href: "#unidades", label: "Unidades" },
  { href: "#formacao", label: "Formação" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];
export const services = [
  { icon: "Sparkles", title: "Profilaxia", text: "Limpeza profissional para remoção de placa e resíduos da superfície dos dentes." },
  { icon: "ShieldCheck", title: "Restaurações", text: "Reparação de dentes com lesões ou áreas comprometidas, após avaliação." },
  { icon: "Smile", title: "Restaurações estéticas", text: "Restaurações planejadas para acompanhar a aparência natural dos dentes." },
  { icon: "Activity", title: "Tratamento de canal", text: "Cuidado da parte interna do dente quando há indicação de tratamento endodôntico." },
  { icon: "CircleMinus", title: "Extração simples", text: "Remoção de um dente acessível, indicada após avaliação clínica." },
  { icon: "Scissors", title: "Extração de siso", text: "Avaliação e remoção de terceiros molares quando houver indicação." },
  { icon: "ScanFace", title: "Gengivoplastia", text: "Procedimento para remodelar o contorno gengival conforme avaliação." },
  { icon: "GitFork", title: "Frenectomia", text: "Remoção ou ajuste de freio oral conforme necessidade identificada." },
  { icon: "Sun", title: "Clareamento", text: "Procedimento acompanhado por profissional e adequado a cada avaliação." },
];
export const differentials = [
  { title: "Atenção ao paciente", text: "Escuta cuidadosa antes de qualquer decisão." },
  { title: "Clareza", text: "Explicações simples sobre cada etapa do atendimento." },
  { title: "Confiança", text: "Relação transparente, com respeito ao seu tempo." },
  { title: "Conforto", text: "Uma experiência pensada para o bem-estar de quem chega." },
];
