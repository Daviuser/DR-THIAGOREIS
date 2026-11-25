// Edite aqui os dados do site. Só "Endodontia" consta na foto (jaleco); o restante é neutro/editável.
export const site = {
  name: "Dr. Thiago Reis",
  title: "Dr. Thiago Reis",
  role: "Odontologia · Endodontia",
  phone: "5571985251396",
  message: "Ol\u00e1, Dr. Thiago! Gostaria de obter mais informa\u00e7\u00f5es sobre seus atendimentos e agendar uma consulta.",
  address: "", // ex.: "Rua Exemplo, 100 — Salvador, BA"
  instagram: "", // ex.: "https://instagram.com/usuario"
};
export const whatsapp = `https://wa.me/${site.phone}?text=${encodeURIComponent(site.message)}`;
export const nav = [
  { href: "#apresentacao", label: "Apresentação" },
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
