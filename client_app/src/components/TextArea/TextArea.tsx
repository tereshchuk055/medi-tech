import "./TextArea.css";

type TextAreaType = {
    register?: any;
};

export default function TextArea({ register }: TextAreaType) {
    return (
        <div className="lb">
            <div>
                <textarea
                    rows={4}
                    className="lu tn adu afa arq axv bbn bbt bbx bcf bgd bne bnf bnr cid cif mb-[-5px]"
                    {...register}
                />
            </div>
        </div>
    );
}