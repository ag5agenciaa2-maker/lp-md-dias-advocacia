# 📋 Falta Adicionar no Schema
**Empresa:** MD Advocacia RJ | Advogado Recreio dos Bandeirantes | Direito Penal | Bancário | Previdenciário | Família | Cível
**Data de geração:** 22/04/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `url` / `@id` / `og:url` / `canonical` — URLs ainda apontam para `ag5agencia.site` (temporário). Substituir por domínio definitivo (`mdadvocaciarj.com.br` ou similar) após hospedagem
- [ ] `og:image` / `image` / `logo` — Caminhos ainda relativos (`assets/...`). Converter para URL absoluta após definir domínio (ex: `https://mdadvocaciarj.com.br/assets/absolutto-business-towers-fachada-noturna.webp`)

## 🟡 IMPORTANTES

- [ ] `sameAs` Google Business Profile — Link do perfil verificado no Google não encontrado no dossiê. Adicionar como **primeiro item** do `sameAs` quando disponível
- [ ] `sameAs` Facebook — Página da empresa não informada
- [ ] `sameAs` LinkedIn — Perfil do Dr. Marcos Dias não informado
- [ ] `email` — Email institucional não encontrado no site (pendência listada no dossiê: `contato@mdadvocaciarj.com.br` sugerido)
- [ ] `aggregateRating.reviewCount` — Apenas 3 avaliações de exemplo no carrossel. Atualizar com número real de avaliações do Google Meu Negócio quando disponível

## 🔵 COMPLEMENTARES

- [ ] `founder.image` — Foto profissional do Dr. Marcos Dias ausente (pendência crítica listada no dossiê). Ao receber, adicionar URL absoluta no campo `founder.image`
- [ ] `founder.sameAs` — Instagram pessoal do Dr. Marcos não encontrado (apenas o perfil do escritório `@mdadvocaciarj`)
- [ ] `paymentAccepted` — Formas de pagamento não listadas no site
- [ ] `legalName` — CNPJ do escritório não informado no dossiê; confirmar razão social exata para o campo `legalName` (atualmente usando "Marcos Dias Advocacia")
- [ ] `datePublished` / `dateModified` — Definidas como `2026-04-22` (data de geração do site). Atualizar `dateModified` sempre que o site sofrer alterações relevantes

## 🟢 FAQ

- [x] Seção FAQ presente — 5 perguntas e respostas implementadas no schema FAQPage ✅

---

## ✅ Resolvidos Automaticamente

- [x] `geo.latitude` / `geo.longitude` — Derivadas do endereço: Av. das Américas, 19005 – Sala 913, Recreio dos Bandeirantes, Rio de Janeiro - RJ → lat: -23.0046 / lng: -43.3219
- [x] `name` — Oficial: MD Advocacia RJ
- [x] `alternateName` — Otimizado com palavras-chave: MD Advocacia RJ | Advogado Barra da Tijuca | Direito Penal | Bancário | Previdenciário | Família | Cível
- [x] `areaServed` — Bairro base (Recreio dos Bandeirantes) + 5 adjacentes: Barra da Tijuca, Jacarepaguá, Itanhangá, Santa Cruz, Campo Grande
- [x] `foundingDate` — Março de 2024 (`2024-03`) informado no dossiê
- [x] `openingHoursSpecification` — Seg–Sex 9h–17h + Plantão Penal 24h (todos os dias)
- [x] `hasOfferCatalog` — 5 serviços com descrições detalhadas e `provider @id`
- [x] `aggregateRating` — 5.0/5 com base nas avaliações do carrossel
- [x] `@graph` unificado — LegalService + WebSite + WebPage + FAQPage com `@id` únicos
- [x] `sameAs` Instagram — https://www.instagram.com/mdadvocaciarj/

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
