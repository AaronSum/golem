import type { ChatMessage } from 'chatgpt-web'

export namespace types {
    export interface Conversation {
        id: string
        title: string
        messages: Message[]
        knowledge: string[]
        createdAt: Date
        updatedAt: Date
        type?: 'chat' | 'embbeded'
        personaId?: string
        systemMessage?: string
        metadata?: ConversationMetadata
        settings?: ConversationSettings
    }

    export interface ConversationMetadata {
        favorite?: boolean
    }

    export interface ConversationSettings {
        personaId?: string
        model?: string | null
        maxTokens?: number | null
        creativity?: Creativity | null
    }

    export interface Message extends ChatMessage {
        updatedAt: Date
        createdAt: Date
        isError?: boolean
        metadata?: MessageMetadata
        actions?: any[]
    }

    export interface MessageMetadata {
        favorite?: boolean
    }

    export interface Persona {
        title: string
        instructions: string
        id: string
    }

    export interface KnowledgeItem {
        id: string
        title: string
        type: string
        sections: { content: string; embedding?: number[]; url?: string }[]
        updatedAt: Date
        metadata: any
    }

    export interface WebScraperResult {
        url: string
        markdown: string
        favicon: string
        title: string
    }

    export type Creativity = 'none' | 'normal' | 'high'

    // Deta namespace
    export namespace deta {
        export interface Conversation {
            key: string
            title: string
            updatedAt: string
            createdAt: string
            metadata?: ConversationMetadata
        }

        export interface Message {
            key: string
            conversationId: string
            text: string
            role: string
            updatedAt: string
            createdAt: string
            parentMessageId?: string
        }
    }

    export namespace ernie {
        /// Ernie Message Role
        export type MessageRole = 'assistant' | 'user' | 'function'
        // Function Schema 定义
        export interface FunctionSchema {
            name: string
            description: string
            parameters: {
                type: string
                properties: {
                    [key: string]: {
                        type: string
                        description?: string
                        enum?: string[]
                    }
                }
                required: string[]
            }
        }

        export interface FunctionCall {
            name: string
            arguments: string
            thoughts?: string
        }

        export interface ChatRequest {
            messages: UserMessage[]
            functions?: FunctionSchema[]
            temperature?: number
            top_p?: number
            penalty_score?: number
            stream?: boolean
            system?: string
            user_id?: string
        }

        export interface ChatResponse {
            id: string
            object?: string
            created?: number
            // 表示当前子句的序号。只有在流式接口模式下会返回该字段
            sentence_id?: number
            /**
           * 输出内容标识，说明：
            · normal：输出内容完全由大模型生成，未触发截断、替换
            · stop：输出结果命中入参stop中指定的字段后被截断
            · length：达到了最大的token数，根据EB返回结果is_truncated来截断
            · content_filter：输出内容被截断、兜底、替换为**等
            · function_call：调用了funtion call功能
           */
            finish_reason?: 'normal' | 'stop' | 'length' | 'content_filter' | 'function_call'
            result?: string
            usage?: {
                prompt_tokens?: number
                completion_tokens?: number
                total_tokens?: number
            }
        }

        export class BaseMessage {
            public role: MessageRole
            public content: string
            public constructor(role: MessageRole, content: string) {
                this.role = role
                this.content = content
            }
        }

        export class UserMessage extends BaseMessage {
            public constructor(content: string) {
                super('user', content)
            }
        }
        export class AiMessage extends BaseMessage {
            public constructor(content: string) {
                super('assistant', content)
            }
        }
        /// Function Message 历史消息返回
        export class FunctionMessage extends BaseMessage {
            public name: string
            public function_call: FunctionCall
            public constructor(name: string, content: string, function_call: FunctionCall) {
                super('function', content)
                this.name = name
                this.function_call = function_call
            }
        }
    }
}
