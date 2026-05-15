import { useEffect, useRef } from 'react'
import { Mail, Linkedin, Layout, Zap, ArrowRight, Code, CheckCircle, Bot, Brain, Workflow } from 'lucide-react'

// Array atualizado com Company e Badges para organizar a sobreposição de datas
const experiences = [
    {
      company: 'Startup de Tecnologia Europeia',
      role: 'Consultor IA & Automação',
      period: 'Mar 2026 - Presente',
      badge: 'Consultoria Estratégica',
      description: 'Integração de Inteligência Artificial em processos de QA e criação de cenários de teste automatizados com agentes inteligentes para produtos digitais escaláveis.',
    },
    {
      company: 'Consultoria Global de Software',
      role: 'Engenheiro de Automação / QA',
      period: 'Out 2024 - Presente',
      badge: 'Contrato Principal',
      description: 'Migração crítica de arquitetura (Selenium para Playwright com Java), implementação de pipelines GoCD e automação avançada em ambiente de alta exigência e performance.',
    },
    {
      company: 'Órgão Governamental Europeu',
      role: 'Engenheiro QA',
      period: '2024 - 2025',
      badge: 'Projeto Paralelo',
      description: 'Automação via Robot Framework, Python e Backend Java. Atuação direta na qualidade e validação de sistemas críticos de arrecadação tributária sob NDA.',
    },
    {
      company: 'Consultoria Enterprise',
      role: 'Tech Lead / Coordenador',
      period: '2019 - 2024',
      badge: 'Liderança Técnica',
      description: 'Estruturação de operações de QA do zero para múltiplos projetos de grande porte, atendendo a líderes globais dos setores de bebidas, hotelaria, benefícios corporativos e varejo.',
    },
    {
      company: 'Setor Bancário de Investimento',
      role: 'QA Engineer',
      period: '2021 - 2022',
      badge: 'Alocação Simultânea',
      description: 'Definição arquitetural em ambiente bancário de alta segurança. Automação mobile utilizando React Native com Detox para aplicações financeiras críticas.',
    },
    {
      company: 'Setor de Saúde & Projetos Core',
      role: 'Consultor',
      period: '2015 - 2021',
      badge: 'Múltiplos Clientes',
      description: 'Automação personalizada para sistemas de saúde governamentais, validação de mainframes, banco de dados e plataformas core para grandes corretoras e instituições financeiras.',
    },
  ]

const solutions = [
  {
    icon: Bot,
    title: 'Agentes Inteligentes & Rovo',
    description: 'Criação e configuração de agentes Atlassian Rovo para análise de requisitos e geração automática de cenários Gherkin.',
  },
  {
    icon: Brain,
    title: 'Ferramentas de IA Customizadas',
    description: 'Construção de aplicações utilizando Streamlit integradas com modelos Gemini 2.0 via OpenRouter.',
  },
  {
    icon: Workflow,
    title: 'Orquestração Jira Automation',
    description: 'Desenho de fluxos de trabalho inteligentes e regras avançadas para garantir rastreabilidade total.',
  },
  {
    icon: CheckCircle,
    title: 'Automação & Performance E2E',
    description: 'Implementação de frameworks ponta a ponta (Web, Mobile, API, Processos, ETL e Testes de Carga).',
  },
  {
    icon: Zap,
    title: 'Engenharia de CI/CD',
    description: 'Otimização de pipelines em AWS, Azure DevOps, GitHub Actions e Jenkins para ciclos de entrega ultra rápidos.',
  },
  {
    icon: Layout,
    title: 'Liderança Técnica Ágil',
    description: 'Gestão de backlog, comunicação com stakeholders e resolução de problemas críticos em ambientes de alta exigência.',
  },
]

const technologies = [
  'Java', 'Python', 'Playwright', 'Selenium', 'Rovo AI', 'Gemini 2.0', 'CI/CD', 'GoCD', 'Jenkins', 'Robot Framework', 'Appium', 'Detox', 'Cucumber', 'Jira Automation', 'TypeScript', 'AWS', 'Azure', 'REST API', 'MongoDB', 'PostgreSQL', 'DynamoDB'
]

const NeuralBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = []
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j]
          let dx = p.x - p2.x
          let dy = p.y - p2.y
          let distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            let opacity = (1 - distance / 150) * 0.10
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}

function Timeline() {
  return (
    <div className="max-w-4xl mx-auto w-full px-2 md:px-8 mt-12">
      <div className="relative border-l border-white/10 space-y-12 pb-4 ml-3 md:ml-0">
        {/* Glow no topo da linha */}
        <div className="absolute top-0 -left-[1px] w-[2px] h-32 bg-gradient-to-b from-white/40 to-transparent" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Ponto da Timeline */}
<div className="absolute -left-[5px] top-8 w-[10px] h-[10px] rounded-full bg-zinc-700 ring-4 ring-black group-hover:bg-indigo-400 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-all duration-500" />
            
            {/* Card de Conteúdo */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300 p-8 rounded-2xl relative overflow-hidden">
              {/* Efeito de luz sutil no hover do card */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                  <span className="inline-flex text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 tracking-wide w-fit">
                    {exp.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                <p className="text-zinc-300 font-medium mb-4">{exp.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
        <NeuralBackground />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
        
<div className="relative z-10 w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.3),0_0_80px_rgba(139,92,246,0.2)] mb-10 bg-zinc-900 mx-auto">
          <img 
            src="/Michael.jpg" 
            alt="Michael Alba" 
            className="w-full h-full object-cover"
          />
        </div>

<h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Arquiteto de Soluções de <br className="hidden md:block" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-cyan-400">
            IA & Automação
            </span>
        </h1>
        
        <p className="relative z-10 text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
          Lidero a integração de Inteligência Artificial na Garantia de Qualidade e desenvolvo estratégias avançadas de automação. Transformo desafios técnicos em eficiência operacional escalável.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a href="#contact" className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] text-center">
            Escalar a minha operação
          </a>
          <a href="#experience" className="w-full sm:w-auto text-white px-10 py-4 rounded-full font-medium border border-white/20 hover:bg-white/5 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all text-center">
            Ver Histórico
          </a>
        </div>
      </section>

      {/* TECH STACK - Infinite Marquee */}
      <section className="py-12 bg-black border-y border-white/5 overflow-hidden flex w-full">
        <div className="flex w-max animate-marquee">
          {technologies.map((tech, index) => (
<span key={`tech-1-${index}`} className="text-indigo-400/70 font-mono text-xl mx-8 whitespace-nowrap">
              {tech} <span className="text-cyan-500/50 ml-16">•</span>
            </span>
          ))}
        </div>
        
        <div className="flex w-max animate-marquee" aria-hidden="true">
          {technologies.map((tech, index) => (
<span key={`tech-2-${index}`} className="text-indigo-400/70 font-mono text-xl mx-8 whitespace-nowrap">
              {tech} <span className="text-cyan-500/50 ml-16">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* SOLUÇÕES - Bento Grid */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4">O Motor de Qualidade</h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-20 text-lg">
          Unindo engenharia de qualidade às capacidades de Inteligência Artificial para otimizar fluxos de trabalho e reduzir custos operacionais.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-indigo-500/5 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300 group"
            >
              <solution.icon className="w-10 h-10 text-zinc-500 mb-8 group-hover:text-indigo-400 transition-colors" />
              <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIGITAL PRESENCE */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-zinc-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-mono mb-6">
              <Code className="w-4 h-4" />
              <span>Novo Serviço Exclusivo</span>
            </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Engenharia de <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-cyan-400">
                Presença Digital
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Desenvolvimento de landing pages e portfólios de altíssima conversão com estética premium. Não crio apenas sites, construo experiências digitais com performance extrema para empresas e profissionais que exigem o topo do mercado.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Design Cinematográfico (Dark Mode)', 'Performance Extrema (Lighthouse 100)', 'Animações Fluidas & Glassmorphism', 'Código Limpo e Otimizado para SEO'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-zinc-500 text-sm font-mono">Projetos a partir de €1.000</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 p-2 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900/80 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mt-8 rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center relative border border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
                <Layout className="w-16 h-16 text-zinc-700/50" />
                <div className="absolute bottom-4 left-4 text-xs font-mono text-zinc-500">React • Tailwind • Framer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE DE EXPERIÊNCIA */}
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-6">Trajetória & Impacto</h2>
        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12 text-lg">
          Mais de 10 anos de experiência arquitetando soluções ponta a ponta em ambientes de alta exigência, impulsionando a excelência técnica em líderes de mercado.
        </p>
        <Timeline />
      </section>

      {/* FOOTER / CTA FINAL */}
      <section id="contact" className="py-40 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
        
        <h2 className="relative z-10 text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-tight">
          Pronto para elevar o nível <br className="hidden md:block" /> da sua engenharia?
        </h2>
        <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <a 
href="mailto:michael.alba@outlook.com.br"
className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            <Mail className="w-5 h-5" />
            E-mail Direto
          </a>
          <a 
            href="https://linkedin.com/in/michaelalba131"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-white/20 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all"
          >
            <Linkedin className="w-5 h-5" />
            Conectar no LinkedIn
          </a>
        </div>
        
        <footer className="mt-32 text-zinc-600 text-sm font-mono relative z-10">
          <p>© {new Date().getFullYear()} Michael Alba. Todos os direitos reservados.</p>
        </footer>
      </section>
    </div>
  )
}

export default App