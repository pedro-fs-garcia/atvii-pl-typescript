import { Component } from 'react';
import { Link } from 'react-router-dom';

interface ProdutoData {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    categoria: string;
    fornecedor: string;
}

interface State {
    produto: Omit<ProdutoData, 'id'>;
    mensagem: string;
}

export default class ProdutoForm extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            produto: {
                nome: '',
                preco: 0,
                descricao: '',
                quantidade: 0,
                categoria: '',
                fornecedor: ''
            },
            mensagem: ''
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            produto: {
                ...prevState.produto,
                [name]: name === 'preco' || name === 'quantidade' ? parseFloat(value) : value
            }
        }));
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { produto } = this.state;
        
        // Validações básicas
        if (!produto.nome.trim()) {
            this.setState({ mensagem: 'O nome do produto é obrigatório' });
            return;
        }
        if (produto.preco <= 0) {
            this.setState({ mensagem: 'O preço deve ser maior que zero' });
            return;
        }
        if (produto.quantidade < 0) {
            this.setState({ mensagem: 'A quantidade não pode ser negativa' });
            return;
        }
        if (!produto.categoria.trim()) {
            this.setState({ mensagem: 'A categoria é obrigatória' });
            return;
        }
        if (!produto.fornecedor.trim()) {
            this.setState({ mensagem: 'O fornecedor é obrigatório' });
            return;
        }

        // Aqui você implementaria a lógica para salvar o produto
        this.setState({
            mensagem: 'Produto registrado com sucesso!',
            produto: {
                nome: '',
                preco: 0,
                descricao: '',
                quantidade: 0,
                categoria: '',
                fornecedor: ''
            }
        });
    };

    render() {
        const { produto, mensagem } = this.state;

        return (
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Novo Produto</h2>
                    <Link to="/produtos" className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-left me-2"></i>
                        Voltar
                    </Link>
                </div>

                <div className="card shadow-sm">
                    <div className="card-header bg-success text-white">
                        <h5 className="mb-0">Informações do Produto</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nome"
                                    value={produto.nome}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Preço</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="preco"
                                    value={produto.preco}
                                    onChange={this.handleChange}
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descrição</label>
                                <textarea
                                    className="form-control"
                                    name="descricao"
                                    value={produto.descricao}
                                    onChange={this.handleChange}
                                    rows={3}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Quantidade em Estoque</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="quantidade"
                                    value={produto.quantidade}
                                    onChange={this.handleChange}
                                    min="0"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Categoria</label>
                                <select
                                    className="form-select"
                                    name="categoria"
                                    value={produto.categoria}
                                    onChange={this.handleChange}
                                    required
                                >
                                    <option value="">Selecione uma categoria</option>
                                    <option value="alimentacao">Alimentação</option>
                                    <option value="higiene">Higiene</option>
                                    <option value="brinquedos">Brinquedos</option>
                                    <option value="acessorios">Acessórios</option>
                                    <option value="medicamentos">Medicamentos</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Fornecedor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fornecedor"
                                    value={produto.fornecedor}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            {mensagem && (
                                <div className={`alert ${mensagem.includes('Erro') ? 'alert-danger' : 'alert-success'}`} role="alert">
                                    {mensagem}
                                </div>
                            )}

                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-success">
                                    <i className="bi bi-check-lg me-2"></i>
                                    Registrar Produto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
} 