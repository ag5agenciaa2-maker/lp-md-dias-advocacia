DOSSIÊ ESTRATÉGICO — MD ADVOCACIA RJ
Base para Construção do Site Institucional

COMANDO PARA CRIAÇÃO DO SITE
Quero que você crie o Site institucional "Dark Gold Legal" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.
REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.
IDENTIDADE VISUAL BASE:
Paleta: #0D0D0D (fundo principal), #C9972C (ouro primário), #E8C46A (ouro claro hover), #1A1A1A (superfícies escuras), #F5F0E8 (off-white texto), #2C2C2C (cinza escuro bordas)
Tipografia: Cormorant Garamond (700/800 — títulos editoriais), DM Sans (400/500 — corpo e UI)
Estilo: Luxury legal branding — dark editorial com acentos dourados, cimento aparente, linhas finas, espaçamento generoso
Sensação: Autoridade. Precisão. Proteção. Sofisticação acessível — escritório que venceu casos impossíveis e ainda trata o cliente pelo nome.
LAYOUT ESCOLHIDO:
Hero: Opção A — Split Assimétrico 58/42 — Lado esquerdo: fundo #0D0D0D, título editorial em Cormorant 9vw "A defesa que não dorme.", subtítulo fino, CTA dourado + badge OAB/RJ. Lado direito: foto do advogado ou escritório com clip-path diagonal em #C9972C, sobreposição de partícula flutuante do símbolo MD.
Serviços: Opção B — Acordeão expandível — Cada área jurídica expande ao clicar revelando descrição + ícone dourado + CTA inline. Fundo escuro com linha separadora em ouro fino. Numeração 01–05 como elemento visual lateral.
Depoimentos: Opção E — Carrossel fade + nota Google — Cards escuros com borda ouro sutil, fade automático, logo Google visível, estrelas douradas, nome e tempo de avaliação.
Sobre/Credenciais: Opção A — Counters animados — 4 counters (casos, absolvições, benefícios, anos) em dourado sobre fundo escuro + texto curto do Dr. Marcos Dias + foto da equipe à direita em grid.
ANIMAÇÕES DO PROJETO:

Logo hero badge MD → de opacity:0 scale(0.8) para opacity:1 scale(1) em 600ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load
Título hero (palavra por palavra) → de translateY(40px) opacity:0 para translateY(0) opacity:1 em 700ms, stagger: 80ms por palavra, easing: ease-out, trigger: load
Imagem hero lado direito → de clip-path: inset(0 100% 0 0) para clip-path: inset(0 0% 0 0) em 900ms, easing: ease-in-out, trigger: load, delay: 300ms
Counters animados → de 0 para valor final em 1800ms, easing: ease-out, trigger: IntersectionObserver 20% visível
Cards de serviço acordeão → altura de 0 para auto (max-height: 300px) em 400ms, easing: ease-in-out, trigger: click
Barra marquee horizontal → translação contínua -100% em 20s linear infinite, trigger: load
Seção FAQ → itens de height:0 opacity:0 para height:auto opacity:1 em 350ms, easing: ease, trigger: click
Elementos decorativos (linha ouro diagonal) → de scaleX(0) para scaleX(1) em 800ms, origin: left, trigger: IntersectionObserver
Nav → ao rolar 80px: background rgba(13,13,13,0.95) com backdrop-filter: blur(12px) + border-bottom 1px solid #C9972C33, transition 300ms

SEÇÕES OBRIGATÓRIAS:

Navbar (logo + links âncora + CTA "Falar com Advogado" dourado + número de plantão penal)
Hero Split Assimétrico 58/42 (modelo escolhido)
Barra animada horizontal: MD ADVOCACIA RJ · DIREITO PENAL · BANCÁRIO · PREVIDENCIÁRIO · FAMÍLIA · CÍVEL · PLANTÃO 24H
Seção de alto impacto: dor e solução do público-alvo ("Seu veículo foi apreendido? Seu benefício foi negado? Você foi preso?")
Serviços/Áreas de Atuação — Acordeão expandível (modelo escolhido)
Seção de encantamento com imagem do escritório (interior) + foto da equipe + frase de efeito
Sobre/Credenciais — Counters animados + histórico Dr. Marcos Dias (modelo escolhido)
Avaliações Google — Carrossel fade (modelo escolhido)
FAQ (perguntas frequentes por área)
Localização: endereço + mapa embed + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado ("Consulta Inicial")
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):
Nome → MD Advocacia RJ
Endereço → Av. das Américas, 19005, Barra da Tijuca, Rio de Janeiro - RJ → link Google Maps rota
Telefone/WhatsApp → (21) 98435-3233 / (21) 98730-2051
Instagram → @mdadvocaciarj → https://www.instagram.com/mdadvocaciarj/
CRÉDITOS:
Esquerda: © MD Advocacia RJ 2026
Direita: Desenvolvido por AG5 Agência (AG5 em destaque na cor #C9972C, link para www.ag5agencia.com.br)
DIRETRIZES ANTI-GENÉRICO:

Sem cards retangulares padrão com bordas curvas iguais
Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza
Sem 3 colunas de ícone + título + texto

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion), lazy loading
Formulário com validação real


1 — MÍDIAS PRINCIPAIS
MídiaStatusFoto da fachada (prédio Absolutto Business Towers)✅ DisponívelFoto aérea do prédio✅ DisponívelFoto interna do escritório (mesa, parede cimento, arte balança)✅ DisponívelFoto da equipe (4 pessoas + Dr. Marcos)✅ DisponívelLogo oficial (MD Advocacia — ouro premium)✅ DisponívelPrint do Instagram✅ DisponívelFoto exclusiva do Dr. Marcos Dias (profissional, fundo neutro)❌ Ausente — pendênciaVídeo institucional ou tour pelo escritório❌ Ausente — não possui

2 — INFORMAÇÕES DA EMPRESA
Nome: MD Advocacia RJ (razão: Marcos Dias Advocacia)
Nicho: Advocacia — Direito Penal, Bancário, Previdenciário, Cível, Família e Trabalhista
Fundador: Dr. Marcos Dias — OAB/RJ 263909
Abertura: Março de 2024
Descrição institucional: Escritório de advocacia com atuação estratégica e personalizada, assessoria jurídica para pessoas físicas e empresas. Foco em atendimento técnico, claro e eficiente. Diferencial: humanização + tecnologia para acompanhamento dos casos.
Proposta de valor: Defesa técnica que não dorme — do Tribunal do Júri ao INSS, do financiamento em atraso à liberdade do seu familiar.
Público-alvo: Pessoas físicas (Zona Oeste do RJ) com problemas criminais, dívidas veiculares, benefícios negados no INSS ou questões familiares/cíveis. Também atende empresas.
Principais serviços:

Direito Bancário — Revisão de contratos, quitação de financiamento em atraso, defesa em busca e apreensão de veículos
Direito Penal — Audiências de custódia, instrução e julgamento, Tribunal do Júri, acompanhamento processual penal completo, plantão 24h
Direito Previdenciário — BPC/LOAS, aposentadorias, correção do CNIS, planejamento previdenciário
Direito de Família — (mencionado mas sem detalhamento)
Direito Cível — (mencionado mas sem detalhamento)

Diferenciais:

Plantão 24h para Direito Penal
Atendimento humanizado e próximo
Comunicação clara e transparente
Uso de tecnologia para acompanhamento de processos
Experiência pessoal do fundador com revisão de contratos (85%+ de redução em casos reais)
Absolvição em Tribunal do Júri (homicídio qualificado — Jequié/BA)
Sede em torre corporativa (Absolutto Business Towers, Barra da Tijuca)

História: Fundado por Dr. Marcos Dias que iniciou antes da conclusão da graduação. Primeiro caso pessoal de quitação com 80%+ de desconto em financiamento veicular. Primeiro júri: absolvição em homicídio qualificado em Jequié/BA. Primeiro escritório: Santa Cruz (Zona Oeste). Expansão para Recreio dos Bandeirantes em poucos meses.
Contatos:

Telefone/WhatsApp 1: (21) 98435-3233
Telefone/WhatsApp 2: (21) 98730-2051
Email: ❌ Não informado
Endereço: Condomínio Absolutto Business Towers, Av. das Américas, 19005 — Barra da Tijuca, Rio de Janeiro - RJ, 22790-703
Horário: Direito Penal 24h · Demais áreas: Seg–Sex 9h–17h

Links:

Instagram: https://www.instagram.com/mdadvocaciarj/
Site: ❌ Não possui ainda
Facebook: ❌ Não informado
LinkedIn: ❌ Não informado
Google Business: ❌ Não informado

Documentação:

OAB/RJ 263909
CNPJ: ❌ Não informado

Áreas de abrangência: Recreio dos Bandeirantes, Santa Cruz, Campo Grande (Zona Oeste RJ)

3 — AVALIAÇÕES
Nenhuma avaliação foi enviada no formulário. Seção a ser adicionada após coleta.
Pendência: Solicitar ao cliente exportação das avaliações do Google Meu Negócio ou link do perfil para captura manual.

4 — ANÁLISE DE BRANDING
Nicho: Advocacia Criminal / Previdenciária / Bancária — Rio de Janeiro, Zona Oeste
Posicionamento: Médio-Premium em ascensão — escritório novo mas com sede em torre corporativa de alto padrão e logo de luxury branding
Estilo visual predominante (baseado nas imagens):

Logo: Luxury branding dourado (MDinitials + balança + espada) — altamente ornamental e aspiracional
Escritório: Industrial refinado — parede de cimento queimado escuro, iluminação de trilho preta, arte dourada, vidro e madeira escura. Paleta naturalmente: Charcoal + Ouro + Off-white
Segundo espaço (equipe): Verde sage nas paredes, arte impressa, atmosfera acolhedora — equipe jovem e acessível

Paleta de cores recomendada:
--cor-fundo:          #0D0D0D   (preto editorial — base de todo o site)
--cor-primaria:       #C9972C   (ouro logo — ação, destaques, CTA)
--cor-ouro-hover:     #E8C46A   (ouro claro — hover states)
--cor-superficie:     #1A1A1A   (cards, seções alternadas)
--cor-borda:          #2C2C2C   (separadores sutis)
--cor-texto:          #F5F0E8   (off-white — leiturabilidade premium)
--cor-texto-muted:    #9A9A8A   (textos secundários)
--cor-acento:         #C9972C33 (ouro 20% — overlays, glassmorphism)
Direção estética: Dark editorial com luxury jurídico — referência: Balenciaga legal, não advocacia corporativa tradicional. Fontes serifadas grandes para títulos, sans-serif limpo para corpo. Espaçamento generoso. Elementos decorativos mínimos (linhas finas ouro, clippath diagonal, partícula flutuante do símbolo MD).
Sensação de marca: Segurança na escuridão. "Quando o problema parece impossível, nós já resolvemos um parecido." — profissional, humano, presente, invencível.
Referências premium do mesmo nicho:

Koury Lopes Advogados (Brasil) — editorial escuro
Martinelli Advogados — minimalismo + serifa
Weil, Gotshal & Manges (internacional) — dark + typo dominante
Cleary Gottlieb (internacional) — hierarquia tipográfica + branco/preto


5 — CHECKLIST DE PENDÊNCIAS
Mídias:

 Foto profissional do Dr. Marcos Dias (fundo neutro ou escritório, traje formal/social)
 Fotos individuais dos demais membros da equipe com nome e cargo
 Vídeo institucional (30–90s) ou tour pelo escritório
 Foto de alta resolução da sala principal de atendimento (sem reflexo)

Contatos e Documentação:

 Email institucional (contato@mdadvocaciarj.com.br ou similar)
 CNPJ do escritório
 Link do Google Meu Negócio (perfil verificado)
 Perfil no LinkedIn (pessoal do Dr. Marcos e/ou do escritório)
 Página no Facebook

Conteúdo:

 Avaliações do Google (exportar ou compartilhar link do perfil)
 Nomes e cargos completos dos membros da equipe
 Detalhamento dos serviços de Direito de Família e Cível (o que especificamente é atendido)
 Depoimentos de clientes em texto (mínimo 5, de diferentes áreas)
 FAQ: perguntas frequentes de cada área para preencher a seção


6 — ANÁLISE DE REFERÊNCIAS WEBFLOW
TEMPLATE 1 — Attornia (https://attornia.webflow.io/home-one)
URL verificada e acessada ✅
HERO: Proporção aproximada 55/45. Lado esquerdo dominado por texto: título grande em serif ("We are voice of justice."), subtítulo menor, CTA button. Abaixo do título: 3 mini-cards horizontais com ícone + label de serviço. Lado direito: imagem do advogado recortada sobre fundo neutro claro com cards flutuando (anos de experiência, pillar icon). Animação de entrada: título faz fade-up em 500ms, imagem aparece da direita em 700ms com easing ease-out. Nav transparente que escurece no scroll.
NAV: Transparente no topo, fundo sólido ao rolar. Links com underline animado em hover. CTA "Free Consultation" em botão arredondado.
TIPOGRAFIA: Títulos em serif (provavelmente Playfair Display ou similar), peso 700, aprox 4–5rem desktop. Corpo em sans-serif leve, 1rem. Uso de números grandes (counters) como elemento decorativo.
CORES DO TEMPLATE: Creme/off-white fundo, preto profundo textos, dourado/âmbar como acento — estrutura adaptável à nossa paleta escura invertendo fundos.
SERVIÇOS/CARDS: 4 colunas com ícone no topo + título + texto curto + link. Cards com borda suave e hover de elevação. (Anti-genérico: evitar essa estrutura exata)
ANIMAÇÕES:

Título hero → translateY(30px) opacity:0 para estado final em 500ms, ease-out, trigger: load
Imagem → translateX(60px) opacity:0 para estado final em 700ms, ease-out, trigger: load, delay: 200ms
Counter numbers → rolagem de 0 ao valor em 1500ms, trigger: scroll IntersectionObserver
Cards → opacity:0 translateY(20px) para visível em 400ms, stagger: 100ms, trigger: scroll

MICRO-INTERAÇÕES: Hover nos botões: background fill animation (border vira fill). Cards: sombra cresce suavemente.
ELEMENTOS DECORATIVOS: Ícone de balança flutuante no hero. Linha horizontal sutil separando seções.
RESUMO CONSTRUTIVO: Para recriar o espírito do Attornia com nossa paleta dark-gold: inverter toda a lógica de cores (fundo escuro, texto off-white, acentos dourados), manter o split hero mas aumentar dramatismo tipográfico para Cormorant Garamond em 8–9vw, substituir os 4 cards por acordeão numerado. O grande diferencial desta referência é a credibilidade transmitida pelos counters e pelo split hero com imagem do advogado — manter esse bloco de confiança.

TEMPLATE 2 — Jurri (https://jurri-template.webflow.io/)
URL verificada e acessada ✅
HERO: Tipografia dominante — título grande em sans-serif bold ("Your Partner for Business Advisory.") centralizado-esquerdo com subtítulo logo abaixo. Imagem aparece à direita em formato recortado irregular (não retangular). Badge flutuante de prêmio sobreposição na imagem. Logo de clientes em marquee horizontal logo abaixo do hero. Proporção ~60/40.
NAV: Sticky imediato. Logo + phone/email no topo (pré-header), nav principal abaixo. Links simples sem hover especial. Menu mobile com slide.
TIPOGRAFIA: Sans-serif clean (provavelmente Inter ou DM Sans), títulos em 600/700. Textos corpo em 400. Tamanhos: H1 ~4rem, H2 ~2.5rem. Uso de peso para hierarquia, sem serifa.
CORES DO TEMPLATE: Off-white/branco fundo, preto carbono textos, azul petróleo como acento — adaptável facilmente à nossa paleta.
SERVIÇOS: Lista expandível por categoria (Business / Financial / Legal&Taxes) — estrutura de 3 colunas com título de categoria e sub-itens como links. Simples mas eficiente.
ANIMAÇÕES:

Marquee de logos → translação contínua -100% em 25s linear infinite, trigger: load
Seções → opacity:0 translateY(24px) para estado final em 600ms, easing: ease, trigger: IntersectionObserver
Testimonial quote → fade-in com foto paralaxando levemente, trigger: scroll

MICRO-INTERAÇÕES: Links de serviço com seta animada no hover (→ desliza 4px). Cursor padrão.
ELEMENTOS DECORATIVOS: Citação fullscreen em quote grande isolada — "Exceptional legal service, exceeded expectations." — fundo claro com aspas grandes decorativas. Linha de separação muito fina entre seções.
RESUMO CONSTRUTIVO: O Jurri entrega uma referência excelente para a seção de testemunho/citação isolada e para o marquee de logos/serviços. Sua estrutura de serviços por categorias é adaptável ao nosso acordeão. Pegar o conceito da citação fullscreen e aplicar ao fundo escuro com ouro cria um bloco de alto impacto emocional. A pré-header com telefone é excelente para o perfil do escritório que oferece plantão 24h.

TEMPLATE 3 — LibertyLaw (https://libertylaw.webflow.io/)
URL verificada e acessada ✅
HERO: Fullscreen com vídeo loop de fundo (tribunal/cena jurídica) + overlay escuro. Título dividido em 3 linhas: "Legal Liberty / Advocates & / Associates in Action". Tipografia serif grande. Badge de prêmio flutuante. Imagem de Themis (deusa da justiça) ao lado em recorte orgânico. Scroll-down badge animado rotativo. Proporção: texto ocupa ~55% largura, imagem flutuante ~30%.
NAV: Dois níveis — utilitário topo (telefone + links) e nav principal abaixo sticky com logo central e links dos dois lados. Fundo branco com logo escuro.
TIPOGRAFIA: Serif premium (estilo Playfair) para títulos, peso 700-800. Sans-serif para corpo. Hierarquia clara com underline decorativo em amarelo/ouro sob palavra-chave do título. Pill/badge com texto curvado rotativo.
CORES DO TEMPLATE: Branco fundo, preto textos, amarelo/dourado acentos (#F5C518 aproximadamente). Estrutura próxima da nossa paleta, apenas invertendo para dark.
SERVIÇOS: 4 cards com ícone colorido + título + texto curto + "Read more". Layout 2x2 em mobile, 4 colunas desktop. (Evitar esta estrutura para diferenciar)
ANIMAÇÕES:

Vídeo hero loop → autoplay muted, overlay escurece em 400ms ao iniciar
Título linha por linha → translateY(50px) opacity:0 para visível em 700ms, stagger 150ms por linha, ease-out, trigger: load
Marquee de texto horizontal ("5+ years OF EXPERIENCE · 5+ years...") → translação contínua em 15s linear infinite
Counters → rolagem com odômetro visual (dígitos rolando), trigger: scroll
Badge rotativo → rotate 360deg em 8s linear infinite, trigger: load

MICRO-INTERAÇÕES: Botão CTA: background muda de contorno para preenchido em 300ms hover. Cards: elevação + borda colorida aparece.
ELEMENTOS DECORATIVOS: Linha sublinhada colorida em palavra do título (underline com forma irregular). Badge circular com texto que roda. Forma orgânica recortada na imagem hero.
RESUMO CONSTRUTIVO: O LibertyLaw entrega o melhor conjunto de referências para MD Advocacia: o badge rotativo é sofisticado e diferenciado (adaptar com "OAB/RJ 263909"), o marquee de texto é perfeito para comunicar plantão 24h, os counters em estilo odômetro são mais dramáticos que simples numbers. O hero com título em 3 linhas quebradas ("A defesa / que não / dorme.") em Cormorant Garamond over fundo escuro, com clip-path dourado na imagem lateral, será o elemento central do nosso site. Descartar o vídeo loop (não há vídeo disponível) e usar foto do escritório com overlay dourado como substituto.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT
HERO:
[X] A) Split assimétrico 58/42 — texto esquerda em fundo #0D0D0D, título "A defesa que não dorme." em Cormorant Garamond 8–9vw, badge OAB/RJ, CTA dourado. Direita: foto escritório ou Dr. Marcos com clip-path diagonal dourado.
[X] H) Fundo foto: Foto do interior do escritório (parede cimento + arte dourada) como background do lado direito com overlay gradiente.
SERVIÇOS:
[X] B) Acordeão — cada área expande ao clicar — numeração 01–05 em dourado como elemento visual lateral esquerdo. Linha ouro fina como separador. Cada item expandido mostra descrição + ícone + CTA inline.
DEPOIMENTOS:
[X] E) Carrossel fade + nota Google visível — cards escuros com borda ouro sutil, autoplay 4s, logo Google oficial, estrelas douradas, fade entre cards, nota média destacada.
SOBRE / CREDENCIAIS:
[X] A) Counters animados + texto curto — 4 counters em ouro (ex: "2 anos | escritório em crescimento", "1ª absolvição no júri", "85% redução em financiamentos", "Plantão 24h") + foto Dr. Marcos e equipe à direita.