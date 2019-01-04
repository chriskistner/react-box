import React from 'react';

export default function MessageRow({subject, read, starred, labels, body, id}) {

    const star = starred ? 'star fa fa-star' : 'star fa fa-star-o';

    return (
        <div>
            <div class="row message read selected">
                <div class="col-xs-1">
                    <div class="row">
                        <div class="col-xs-2">
                            <input type="checkbox" checked={read} />
                        </div>
                        <div class="col-xs-2">
                            <i class={star}></i>
                        </div>
                    </div>
                </div>
                <div class="col-xs-11">
                    <a href="#">
                    {subject}
                    </a>
                </div>
            </div>
            <div class="row message-body">
                <div class="col-xs-11 col-xs-offset-1">
                    {body}
                </div>
            </div>
        </div>
    )
};