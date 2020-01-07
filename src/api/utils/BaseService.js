export class BaseService {
    static factory() {
        return new this();
    }
}